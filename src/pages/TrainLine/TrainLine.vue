<script setup>
import 'leaflet/dist/leaflet.css'
import { onMounted, shallowRef, ref } from 'vue'
import geoJson from '@/assets/uzrailways.json'
import uzbekistanGeojson from '@/assets/mtu.json'
import L from 'leaflet'
import './leaflet.motion.min.js'
import PathFinder from 'geojson-path-finder'
import * as turf from '@turf/turf'
import { expensiveTrain, ordinaryTrain } from './icons.js'
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
    pair: 0,
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
  motion: null
}

const depoes = [
  {
    name: "Xiva",
    location: [41.457136982923494, 60.34790039062501]
  },
  {
    name: "Buxoro",
    location: [39.82191004668272, 64.34815387725831]
  },
  {
    name: "Samarqand",
    location: [39.707186656826565,66.73095703125001]
  },
  {
    name: "Qarshi",
    location: [38.06219172306828, 65.64193725585939]
  },
  {
    name: "Toshkent",
    location: [41.19431726315258, 69.26879882812501]
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
        html: `
          <p class="depo-name">${depo.name}</p>
        `,
        iconAnchor: [80,70]
      }),
      iconSize: L.point(2000, 24)
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

  stationPaths.forEach(stationPath => {
    stationPath.motionPaths.push([...intersection.data])
    const start = turf.point(stationPath.start.toReversed())
    const finish = turf.point(stationPath.end.toReversed())
    const startInNetwork = turf.nearestPoint(start, points)
    const endInNetwork = turf.nearestPoint(finish, points)
    const path = pathFinder.findPath(startInNetwork, endInNetwork);
    const fixedPathLineData = path.path.map((coord) => ({lat: coord[1], lng: coord[0]}))

    stationPath.motionPaths.push(fixedPathLineData)
    stationPath.forwardMotionSequence = L.motion.seq(stationPath.motionPaths.map((line, idx)=>{
      return L.motion.polyline(line, {
        color: stationPath.lineColor,
        weight: 7
      }, {
        easing: L.Motion.Ease.easeInOutQuart
      }, {
        removeOnEnd: idx!=stationPath.motionPaths.length-1,
        icon: L.divIcon({html: stationPath?.icon ? `<div style="color: ${stationPath.lineColor}">${stationPath?.icon}</div>` : "<i class='fa fa-car fa-2x' aria-hidden='true'></i>", iconSize: L.point(27.5, 24), iconAnchor: stationPath.iconAnchor})
      }).motionDuration(3000)
    }))
    stationPath.backwardMotionSequence = L.motion.seq(stationPath.motionPaths.toReversed().map((line, idx)=>{
      return L.motion.polyline(line.toReversed(), {
        color: stationPath.lineColor,
        weight: 7
      }, {
        easing: L.Motion.Ease.easeInOutQuart
      }, {
        removeOnEnd: idx!=stationPath.motionPaths.length-1,
        icon: L.divIcon({html: stationPath?.icon ? `<div style="color: ${stationPath.lineColor}">${stationPath?.icon}</div>` : "<i class='fa fa-car fa-2x' aria-hidden='true'></i>", iconSize: L.point(27.5, 24), iconAnchor: stationPath.iconAnchor})
      }).motionDuration(3000)
    }))
  });
}

const actions = {
  clearLayers() {
    stationPaths.forEach((stationPath) => {
      const { forwardMotionSequence, backwardMotionSequence } = stationPath;

      if (forwardMotionSequence && map.hasLayer(forwardMotionSequence)) {
        forwardMotionSequence.motionStop?.();
        map.removeLayer(forwardMotionSequence);
      }

      if (backwardMotionSequence && map.hasLayer(backwardMotionSequence)) {
        backwardMotionSequence.motionStop?.();
        map.removeLayer(backwardMotionSequence);
      }
    });
  },
  phase1start(){
    this.clearLayers()
    for(let i=1;i<stationPaths.length;i++){
      stationPaths[i].forwardMotionSequence.addTo(map)
      stationPaths[i].forwardMotionSequence.motionStart()
    }
  },
  phase1return(){
    this.clearLayers()
    for(let i=1;i<stationPaths.length;i++){
      stationPaths[i].backwardMotionSequence.addTo(map)
      stationPaths[i].backwardMotionSequence.motionStart()
    }
  },
  phase2start(){
    this.clearLayers()
    for(let i=0;i<stationPaths.length;i++){
      stationPaths[i].forwardMotionSequence.addTo(map)
      stationPaths[i].forwardMotionSequence.motionStart()
    }
  },
  phase2return(){
    this.clearLayers()
    for(let i=0;i<stationPaths.length;i++){
      stationPaths[i].backwardMotionSequence.addTo(map)
      stationPaths[i].backwardMotionSequence.motionStart()
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
    <div id="map" style="height: 100vh"></div>
    <div class="control-panel">
<!--      <button @click="actions.phase1start">phase 1 start</button>-->
<!--      <button @click="actions.phase1return">phase 1 return</button>-->
<!--      <button @click="actions.phase2start">phase 2 start</button>-->
<!--      <button @click="actions.phase2return">phase 2 return</button>-->
      <MenuCard />
    </div>
  </div>
</template>


<style>
.map-box {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.control-panel{
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2000;
  height: 200px;
  background: black;
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
</style>
