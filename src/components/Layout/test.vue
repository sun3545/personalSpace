<template>
  <div class="test-container">
     <Layout>
        <template #left>
           <div class="left">
              左边
           </div>
        </template>
         <template>
           <div class="content">
              中间区域
           </div>
        </template>
         <template #right>
           <div class="right">
              右边
           </div>
        </template>
     </Layout>
  </div>
</template>

<script>
import Layout from "./"
export default {
   components:{
      Layout,
   }
}
</script>

<style scoped lang="less">
.test-container{
   width: 1000px;
   height: 600px;
   border: 1px solid red;
   margin: 0 auto;
}
.left{
   width: 200px;
   height: 100%;
   background: #ccc;
}
.content{
   width:100%;
   height: 100%;
   background: blue;
}
.right{
   width: 150px;
   height: 100%;
   background: skyblue;
}
</style>