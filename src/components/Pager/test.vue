<template>
  <div>
     <Pager :current="current" :total="total" @pageChange="handlePageChange"/>
   </div>
</template>

<script>
import Pager from "./";
export default {
   data(){
      return {
         total:302,
         current:1,
      }
   },
   components:{
      Pager,
   },
   methods:{
      handlePageChange(newPage){
         this.current = newPage;
      }
   }
}
</script>

<style>

</style>