
import Vue from 'vue';
import App from './App.vue';
import './styles/global.less';
import router from "./router";
import store from './store';
store.dispatch("setting/fetchSetting")

import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;

// 注册全局指令
import vLoading from "./directives/loading.js";
Vue.directive("loading",vLoading);
import Lazy from "./directives/lazy";
Vue.directive("lazy", Lazy);

import "./mock";

// 导入：该模块定义事件总线到原型上面
import "./eventBus";
 
new Vue({
   router,
    store,
   render: h => h(App),
}).$mount('#app')

// // 测试远程文章数据
// import * as blogApi from "./api/blog";
// blogApi.getBlog("qqq").then(r=>{
//     console.log("博客分类", r)
// })
// blogApi.postComment({
//     nickname:"one",
//     content:"内容",
//     blogId:12
// }).then(r=>{
//     console.log("提交博客",r)
// })

// blogApi.getComments('1111').then(r=>console.log("获取评论",r))


// 测试事件总线
// import eventBus from "./eventBus";

// function handler1(data,one){
//     console.log("handler1", data,one)
// }
// function handler2(data){
//     console.log("handler2", data)
// }
// eventBus.$on("event1", handler1)
// eventBus.$on("event1", handler2)
// eventBus.$on("event2", handler1)

// window.eventBus = eventBus;