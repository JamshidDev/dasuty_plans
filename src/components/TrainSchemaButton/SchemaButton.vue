

<template>
    <div class="schema-button-container shadow-2 px-4 py-2  overflow-hidden">
        <div class="grid ">
          <div class="col-12 flex justify-content-between align-items-center border-bottom-1 border-200">
            <div class="m-0 font-bold text-sm"> Бошқарув тугмалари
            </div>
            <div>

            </div>
          </div>
          <div class="col-12">
            <div class="grid">
             <div class="col-4">
               <div @click="action_emit('old-train')" class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                 Олдинги ҳолат
                 <i class='bx bx-show text-500 text-2xl'></i>
               </div>
             </div>
              <div class="col-4">
                <div @click="action_emit('new-train')" class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                  Ҳозирги ҳолат
                  <i class='bx bx-show text-500 text-2xl'></i>
                </div>
              </div>
              <div class="col-4">
                <div @click="action_emit('close')" class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                  Ёпиш
                  <i class='bx bx-x text-500 text-2xl'></i>
                </div>
              </div>
              <div class="col-12">
                <div @click="action_emit('route1')" class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                  битта локомотив битта поезд - 1
                  <i class='bx bx-show text-500 text-2xl'></i>
                </div>
              </div>
              <div class="col-12">
                <div @click="action_emit('route2')" class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                  битта локомотив битта поезд - 2
                  <i class='bx bx-show text-500 text-2xl'></i>
                </div>
              </div>
              <div class="col-12">
                <div  @click="action_emit('route3')" class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                  битта локомотив битта поезд - 3
                  <i class='bx bx-show text-500 text-2xl'></i>
                </div>
              </div>
              <div class="col-8">
              <div @click="action_emit('route4')" class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                битта локомотив битта поезд - 4
                <i class='bx bx-show text-500 text-2xl'></i>
              </div>
            </div>
              <div class="col-4">
                <div @click="action_emit('vokzals')" class="w-full flex gap-2 justify-content-between align-items-center border-round px-2 py-1 border-1 border-300 cursor-pointer text-sm shadow-1 active:bg-blue-100">
                  Вокзаллар
                  <i class='bx bx-show text-500 text-2xl'></i>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "SchemaButton",
  data(){
    return{

    }
  },
  methods:{
    action_emit(param){
      this.$emit("action_draw", param)
    }
  }
}
</script>

<style scoped lang="scss">

.schema-button-container{
  width: 600px;
  height: 320px;
  position: absolute;
  transform-origin: 0 0;
  transform: scale(1) translate(0px, 0px);
  bottom: 10px;
  left: 10px;
  border: 1px solid #d3d3d3;
  z-index: 12;
  background: #ffffff;
  border-radius: 12px;
}
</style>