<template>
  <div class="test-container">
     <Contact :text="text"></Contact> 
  </div>
</template>

<script>
import Contact from "./";
import '@/styles/global.less';
export default {
   data(){
      return {
         text:'one',
         src:'tencent://message/?Menu=yes&uin=要对话的QQ号&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45',
      }
   },
   components:{
      Contact,
   }
}
</script>

<style>
/* body{
   background: #000;
   color: #fff;
} */
.test-container{
   width: 400px;
   height: 400px;
    background: #000;
   color: #fff;
   margin:0 auto; 
   padding-top: 200px;
}

</style>