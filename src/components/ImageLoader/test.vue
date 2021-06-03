<template>
  <div class="test-container">
     <ImageLoader 
     :src="src"
     :placeholder="placeholder"
     @load="load"></ImageLoader>
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
   data(){
      return {
         src:"https://img0.baidu.com/it/u=1556318640,2629763484&fm=26&fmt=auto&gp=0.jpg",
         placeholder:"https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      }
   },
   components:{
      ImageLoader,
   },
   methods:{
      load(){
         console.log("img加载完成")
      }
   }
}
</script>

<style>
.test-container{
   width: 600px;
   height: 400px;
   border: 2px solid;
   margin: 0 auto;
}
</style>