
/**
 * @description: 事件总线
 * @param {*}
 * @return {*}
 */
// const listeners = {};
// export default {
//     // 监听某一个事件
//     $on(eventName, handler) {
//         if (!listeners[eventName]) {
//             listeners[eventName] = new Set();
//         }
//         listeners[eventName].add(handler)
//     },
//     // 取消监听
//     $off(eventName, handler) {
//         if (!listeners[eventName]) {
//             return
//         }
//         listeners[eventName].delete(handler);
//     },
//     //  触发事件
//     $emit(eventName, ...args) {
//         if (!listeners[eventName]) {
//             return
//         }
//         for (const handler of listeners[eventName]) {
//             handler(...args)
//         }
//     }
// }

import Vue from "vue";
const app = new Vue({})
/**         mainScroll
 * @description: 主区域滚动条位置变化触发
 * @param {*滚动的dom元素,如果是undefined，则表示dom元素已经存在了}   
 * @return {*}
 */
/**         setMainScroll
 * @description: 当需要设置主区域滚动条位置时触发
 * @param {* 滚动高度}
 * @return {*}
 */
Vue.prototype.$bus = app;
export default app;

