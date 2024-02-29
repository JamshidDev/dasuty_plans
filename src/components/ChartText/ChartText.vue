

<template>

  <a :href="site_link"  target="_blank" class="absolute no-underline" :class="[slide ==='left'? 'left_slide' : 'right_slide', `top-${positionTop}`]">
    <div class="flex align-items-center gap-2 ">
      <div v-if="slide === 'right'" class="chart-element">
        <vc-donut
            size="60"
            background="#181818"
            thickness="20"
            :sections="[{ value:chart_persant, color:detect_color(chart_persant) }]"
            :thickness="100">
          <div class="text-sm text-center font-bold" :style="{color:detect_color(chart_persant)}">{{chart_persant}}%</div>
        </vc-donut>
      </div>
      <div class="text-element flex flex-column  text-4xl uppercase">
        <div class="flex gap-2 align-items-center  gradient-background" :class="slide === 'left'? 'justify-content-end' : 'justify-content-start '">
          <i v-if="slide === 'right'" :class="text_icon" class='bx text-5xl'></i> {{content_text}}
          <i v-if="slide === 'left'" :class="text_icon" class='bx text-5xl'></i>
        </div>
        <div :class="slide === 'left'? 'text-right' : 'text-left'" class="font-semibold" :style="{color:detect_color(chart_persant)}" style="height:12px; font-size:11px">
           {{content_info}}
        </div>


      </div>
      <div v-if="slide === 'left'" class="chart-element">
        <vc-donut
            size="60"
            background="#181818"
            thickness="20"
            :sections="[{ value:chart_persant, color:detect_color(chart_persant)}]"
            :thickness="100">
          <div class="text-base text-center font-bold" :style="{color:detect_color(chart_persant)}">{{chart_persant}}%</div>
        </vc-donut>
      </div>
    </div>
  </a>

</template>
<script>
export default {
  props:{
    positionTop:{
      type:Number,
      default:1,
    },
    slide:{
      type:String,
      default:'left',
    },
    content_text:{
      type:String,
      default:'Content Text',
    },
    content_info:{
      type:String,
      default:'Content text details',
    },
    site_link:{
      type:String,
      default:'https://exodim.railway.uz/',
    },
    text_icon:{
      type:String,
      default:'bxs-cog',
    },
    chart_persant:{
      type:Number,
      default:67,
    }

  },
  data(){
    return{
      colors:{
        green:'#63bf37',
        yellow:'#c1ab38',
        red:'#ff7b7f',
      }
    }
  },
  methods:{
    detect_color(value){
      if(value>71){
        return this.colors.green;
      }else if(value>56){
        return this.colors.yellow;
      }else{
        return this.colors.red;
      }
    }
  }

}
</script>


<style scoped lang="scss">
  $distance_width:350px;
  $zero_top:260px;
  $distance_top:115px;


  .left_slide {
    right:calc(50% + $distance_width);
  }

  .right_slide {
    left:calc(50% + $distance_width);
  }
  .top-1{
    top:calc($zero_top)
  }
  .top-2{
    top:calc($zero_top + $distance_top)
  }

  .top-3{
    top:calc($zero_top + 2*$distance_top)
  }
  .top-4{
    top:calc($zero_top + 3*$distance_top)
  }
  .top-5{
    top:calc($zero_top + 4*$distance_top)
  }

  .top-8{
    top:calc($zero_top + 4*$distance_top);
    left:calc(50%);
    transform: translateX(-50%);
  }

  .top-9{
    top:calc($zero_top + 4*$distance_top);
  }
  .top-10{
    top:calc($zero_top + 4*$distance_top);
  }

  .top-11{
    top:calc($zero_top - $distance_top) ;
    left:calc(50%);
    transform: translateX(-50%);
  }

  .top-12{
    top:calc($zero_top - $distance_top);
  }
  .top-13{
    top:calc($zero_top - $distance_top);
  }

</style>