import Vue from 'vue';
import VueRouter from "vue-router";
import routes from "./routes";
import {setTitle} from "@/utils";
if(!window.VueRouter){
    Vue.use(VueRouter); // 使用一个插件

}

const router = new VueRouter({
   // 配置
   routes,//   路由的路径规则
   mode:'history' // 默认为：hash
})
router.afterEach((to,from)=>{
   if(to.meta.title){
       setTitle.setRouteTitle(to.meta.title)
   }
})
export default router;