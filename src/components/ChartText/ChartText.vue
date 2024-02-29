

<template>

  <a :href="site_link"  target="_blank" class="absolute no-underline" :class="[slide ==='left'? 'left_slide' : 'right_slide', `top-${positionTop}`]">
    <div class="flex">
      <div class="chart-element">
      </div>
      <div class="text-element flex gap-4 align-items-center gradient-background text-4xl uppercase">
        <i :class="text_icon" class='bx text-5xl'></i> {{content_text}}
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
    site_link:{
      type:String,
      default:'https://exodim.railway.uz/',
    },
    text_icon:{
      type:String,
      default:'bxs-cog',
    }
  }
}
</script>


<style scoped lang="scss">
  $distance_width:300px;
  $zero_top:260px;
  $distance_top:100px;

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
</style>