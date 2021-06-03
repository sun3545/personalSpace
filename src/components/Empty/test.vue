<template>
<div class="text-container">
  <Empty ></Empty>
</div>
</template>

<script>
import Empty from "./";
export default {
   components:{
      Empty,
   },
   data(){
      return {
         text:"one"
      }
   }
}
</script>

<style lang="less" scoped>

.text-container{
      width: 600px;
      height: 400px;
      margin: 0 auto;
      border: 2px solid;
      position: relative;
   }
</style>