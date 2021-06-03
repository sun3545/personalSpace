<template>
  <div class="image-loader-container" >
     <img class="handerLoader"
         :src="placeholder" alt="" 
         v-if="!originLoader"
         :style="{transition:`all ${duration}ms `}">
     <img @load="imageLoad" 
         :src="src" alt="" 
         :style="{ opacity:originOpacity,
                  transition:`all ${duration}ms `}"
      >
  </div>
</template>

<script>
export default {
   data(){
      return {
         originLoader:false,
         allLoader:false
      }
   },
   computed:{
      originOpacity(){
         return this.originLoader?1:0;
      }
   },
   props:{
      src:{
         type:String,
         require:true
      },
      placeholder:{
         type:String,
         require:true,
      },
      duration:{
         type:Number,
         default: 500
      }
   },
   methods:{
      imageLoad(){
        //  console.log("加载完成")
         this.originLoader = true;
         setTimeout(()=>{
            this.allLoader = true;
            this.$emit("load")
         },this.duration)
      },
   }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.image-loader-container{
   width: 100%;
   height: 100%;
   overflow: hidden;
   position: relative;
   
   img{
      .self-fill();
      object-fit: cover;
      .handerLoader{
         filter: blur(2vw);
      }
   }
}
   
</style>