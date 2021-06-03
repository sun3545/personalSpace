import Vue from "vue";
/**
 * @name: getComponentRootDom
 * @msg: 
 * @param {*} comp   模块
 * @param {*} props  类型
 * @return {*}
 * 获取出来的是dom
 */
export default function (comp, props){
   const vm = new Vue({
      render:h=>h(comp,{props})
   });
   vm.$mount();
   return vm.$el;
}