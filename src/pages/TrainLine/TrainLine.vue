<script setup>
import 'leaflet/dist/leaflet.css'
import { onMounted, shallowRef, ref } from 'vue'
import geoJson from '@/assets/uzrailways.json'
import uzbekistanGeojson from '@/assets/mtu.json'
import L from 'leaflet'
import './leaflet.motion.min.js'
import PathFinder from 'geojson-path-finder'
import * as turf from '@turf/turf'
import { expensiveTrain, ordinaryTrain, mapPin } from './icons.js'
import MenuCard from "@/pages/TrainLine/ui/MenuCard.vue"

const pathFinder = new PathFinder(geoJson);
const points = turf.explode(geoJson)
let map = null


const stationPaths = [
  {
    start: [39.6860, 66.9290],
    end: [41.377190972348316, 60.37679851055146],
    wayName: "Samarkand - Khiva",
    lineColor: "#32a84e",
    data: [],
    motionPaths: [],
    forwardMotionSequence: null,
    backwardMotionSequence: null,
    time: 2,
    pair: 3,
    icon: expensiveTrain,
    iconAnchor: [40, 30]
  },
  {
    start: [39.6860, 66.9290],
    end: [39.7220065, 64.548945],
    wayName: "Samarkand - Bukhara",
    lineColor: "#ffffff",
    data: [],
    motionPaths: [],
    forwardMotionSequence: null,
    backwardMotionSequence: null,
    time: 1,
    pair: 3,
    icon: ordinaryTrain,
    iconAnchor: [40, 30]
  },
  {
    start: [39.6860, 66.9290],
    end: [39.09021738176819, 66.83719396591188],
    wayName: "Samarkand - Karshi",
    lineColor: "#270e47",
    data: [],
    motionPaths: [],
    forwardMotionSequence: null,
    backwardMotionSequence: null,
    time: 1,
    pair: 2,
    icon: ordinaryTrain,
    iconAnchor: [40, 30]
  }, {
    start: [39.6860, 66.9290],
    end: [39.6860, 66.8290],
    wayName: "Tashkent - Samarkand",
    data: [],
    motionPaths: [],
    forwardMotionSequence: null,
    backwardMotionSequence: null,
    time: 1,
    pair: 1,
    icon: ordinaryTrain,
    hasOwnPath: false,
    lineColor: "#e3323e",
    iconAnchor: [40, 30]
  }]

const intersection = {
  start: [41.2918959, 69.2687889],
  end: [39.6860, 66.9290],
  wayName: "Tashkent - Samarkand",
  lineColor: "#203b27",
  data: [],
  motion: null,
}

const depoes = [
  {
    name: "Xiva",
    location: [41.37913379554578, 60.37948608398438]
  },
  {
    name: "Buxoro",
    location: [39.72174031585906, 64.53369140625001]
  },
  {
    name: "Samarqand",
    location: [39.707186656826565,66.73095703125001]
  },
  {
    name: "Qarshi",
    location: [38.82758646208098, 65.76416015625001]
  },
  {
    name: "Toshkent",
    location: [41.2918959, 69.2687889]
  },
]


function initialMap() {
  map = L.map('map').setView([41.08763212467916, 64.40185546875001],  7, {
    animate: true,
  })
  map.on('click', console.log)
  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map)
  L.geoJSON(geoJson, {
    style: { color: 'gray' }
  }).bindPopup(function (layer) {
    return layer?.feature.id;
  }).addTo(map)

  const colors = [
    'lawngreen',
    'orange',
    'yellow',
    'mediumpurple',
    'hotpink',
    'hotpink',
  ]

  const style = () => {
    let i = 0
    return (country) => {
      if (country.properties.iso1 == 'UZ') {
        return {
          color: '#007fbd',
          weight: 4,
          opacity: 0.7,
        }
      }
      return {
        weight: 1,
        opacity: 1,
        color: "black",
        dashArray: '3',
        fillOpacity: 0.6,
        fillColor: colors[i++],
      }
    }
  }

  L.geoJSON(uzbekistanGeojson, {
    style: style()
  }).addTo(map)


  /**
   * Add depoes
   */

  depoes.forEach(depo => {
    L.marker(depo.location, {
      icon: L.divIcon({
        html: mapPin,
        iconAnchor: [25,50],
        className: "depo-icon"
      }),
      iconSize: L.point(0,0)
    }).addTo(map);
  })
}

function init() {
  const startIntersection = turf.point(intersection.start.toReversed())
  const finishIntersection = turf.point(intersection.end.toReversed())
  const startIntersectionInNetwork = turf.nearestPoint(startIntersection, points)
  const endIntersectionInNetwork = turf.nearestPoint(finishIntersection, points)
  const intersectionPath = pathFinder.findPath(startIntersectionInNetwork, endIntersectionInNetwork);
  intersection.data = intersectionPath.path.map((coord) => ({lat: coord[1], lng: coord[0]}))
  stationPaths.forEach((stationPath, pathIdx) => {
    stationPath.motionPaths.push([...intersection.data])
    const start = turf.point(stationPath.start.toReversed())
    const finish = turf.point(stationPath.end.toReversed())
    const startInNetwork = turf.nearestPoint(start, points)
    const endInNetwork = turf.nearestPoint(finish, points)
    const path = pathFinder.findPath(startInNetwork, endInNetwork);
    const fixedPathLineData = path.path.map((coord) => ({lat: coord[1], lng: coord[0]}))
    stationPath.motionPaths.push(fixedPathLineData)
  });
}

const actions = {
  clearLayers() {
    this.clearTimedEvent()
    map.eachLayer((layer) => {
      if(layer?.options?.isMotionPolyline){
        map.removeLayer(layer)
      }
    })
  },
  generateMotion( all ){
    stationPaths.forEach((stationPath, pathIdx) => {
      
      stationPath.forwardMotionSequence = L.motion.seq(stationPath.motionPaths.map((line, idx)=>{
        return L.motion.polyline(line, {
          color: stationPath.lineColor,
          weight: 7,
          isMotionPolyline: true
        }, {
          easing: L.Motion.Ease.easeInOutQuart
        }, {
          removeOnEnd: idx!=stationPath.motionPaths.length-1,
          icon: L.divIcon({
            html: `<div
                      style="color: ${stationPath.lineColor};">
                        ${stationPath?.icon}
                        ${
                            idx!=0 ? 
                            `<span class="train-icon-badge">${stationPath.pair*2}</span>` : 
                            `<span class="train-icon-badge">${(all ? 9 : 6) *2}</span>`
                        }
                    </div>`,
            iconSize: L.point(27.5, 24),
            iconAnchor: stationPath.iconAnchor,
            className: !pathIdx ? 'expensive-train-icon' : 'cheap-train-icon'
          })
        }).motionDuration(3000)
      }))
      
      stationPath.backwardMotionSequence = L.motion.seq(stationPath.motionPaths.toReversed().map((line, idx)=>{
        return L.motion.polyline(line.toReversed(), {
          color: stationPath.lineColor,
          weight: 7,
          isMotionPolyline: true
        }, {
          easing: L.Motion.Ease.easeInOutQuart
        }, {
          removeOnEnd: idx!=stationPath.motionPaths.length-1,
          icon: L.divIcon({
            html:`<div
                      style="color: ${stationPath.lineColor}">
                        ${stationPath?.icon}
                        ${
                            idx!=1 ? 
                            `<span class="train-icon-badge">${stationPath.pair*2}</span>` : 
                            `<span class="train-icon-badge">${(all ? 9 : 6) *2}</span>`
                        }
                    </div>`,
            iconSize: L.point(27.5, 24),
            iconAnchor: stationPath.iconAnchor,
            className: !pathIdx ? 'expensive-train-icon' : 'cheap-train-icon'
          })
        }).motionDuration(3000)
      }))

    })
  },
  timedEvent: null, 
  phase1start(){
    this.clearLayers()
    this.generateMotion(false)
    for(let i=1;i<stationPaths.length;i++){
      stationPaths[i].forwardMotionSequence.addTo(map)
      stationPaths[i].forwardMotionSequence.motionStart()
    }
    this.timedEvent = setTimeout(()=>{
      this.phase1return()
    }, 6500)
  },
  phase1return(){
    this.clearLayers()
    this.generateMotion(false)
    for(let i=1;i<stationPaths.length;i++){
      stationPaths[i].backwardMotionSequence.addTo(map)
      stationPaths[i].backwardMotionSequence.motionStart()
    }
    this.timedEvent = setTimeout(()=>{
      this.phase1start()
    }, 6500)
  },
  phase2start(){
    this.clearLayers()
    this.generateMotion(true)
    for(let i=0;i<stationPaths.length;i++){
      stationPaths[i].forwardMotionSequence.addTo(map)
      stationPaths[i].forwardMotionSequence.motionStart()
    }
    this.timedEvent = setTimeout(()=>{
      this.phase2return()
    }, 6500)
  },
  phase2return(){
    this.clearLayers()
    this.generateMotion(true)
    for(let i=0;i<stationPaths.length;i++){
      stationPaths[i].backwardMotionSequence.addTo(map)
      stationPaths[i].backwardMotionSequence.motionStart()
    }
    this.timedEvent = setTimeout(()=>{
      this.phase2start()
    }, 6500)
  },
  clearTimedEvent(){
    if(this.timedEvent){
      clearTimeout(this.timedEvent)
      this.timedEvent = null
    }
  }
}

onMounted(() => {
  initialMap()
  init()
})

</script>

<template>
  <div class="map-box">
    <div id="map" style="height: 90vh"></div>
    <MenuCard />
    <div class="train_line-container block border-1 border-gray-300 shadow-2 bg-white border-round-lg">
      <div class="">
        <div class="w-full px-2 grid pt-2 grid-nogutter gap-2">
          <div
              @click="actions.phase1start"
              class="col-6 px-2 py-1 border-1 border-gray-200 bg-gray-50 border-round flex cursor-pointer flex align-items-center justify-content-between text-gray-600">
            <i class='bx bxs-grid-alt'></i>
            Олдинги ҳолат
          </div>
          <div
              @click="actions.phase2start"
              class="col px-2 py-1 border-1 border-gray-200 bg-gray-50 border-round flex cursor-pointer flex align-items-center justify-content-between text-gray-600">
            <i class='bx bxs-grid-alt'></i>
            Кейинги холат
          </div>
          <div
              @click="actions.clearLayers"
              class="cursor-pointer" style="background-color: rgba(0, 0, 0, 0.1);">
              &nbsp;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>

.train_line-container{
  width:600px;
  height:50px;
  position:fixed;
  bottom:6px;
  left:6px;
  z-index:1000;
}

.map-box {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.depo-icon{
  z-index: 550 !important;
}

.expensive-train-icon{
  z-index: 1000 !important;
}

.cheap-train-icon{
  z-index: 900 !important;
}

.leaflet-div-icon {
  background: transparent!important;
  border: none!important;
  color: black;
}

.red {
  color: red!important;
}
.depo-name{
  text-align: center;
  min-width: 200px;
  width: 200px;
  background: white;
  border: 3px solid black;
  border-radius: 8px;
  padding: 10px;
  font-weight: bold;
}

.train-icon-badge{
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: blue;
  color: white;
  border-radius: 50%;
  font-weight: bold;
}

</style>
