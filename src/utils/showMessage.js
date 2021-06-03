import getComponentRootDom from "./getComponent"
import Icon from "@/components/Icon"
import styles from "./showMessage.module.less"
/**
 * @name: 
 * @msg: 
 * @param {*} content 消息内容
 * @param {*} type      消息类型 info error success warn
 * @param {*} container 容器，消息会显示在容器中间，如果不传，则显示到页面中间
 * @return {*}
 */
export default function ({content, type = "info", container, duration = 2000,callback}) {
  
   //  创建消息元素
   const div = document.createElement('div');
   // 设置样式
   div.className = `${styles.message} ${styles["message-" + type]}`;
   const iconDom = getComponentRootDom(Icon, {
      type
   })

   div.innerHTML = `<span class=${styles.icon}>${iconDom.outerHTML}</span><div>${content}</div>`

   // 将div加入容器
   if (!container) {
      container = document.body;
   } else {
      // 容器的position是否被改动过
      if (getComputedStyle(container).position == "static") {
         container.style.position = "relative"
      }
   }
   container.appendChild(div);
   div.clientHeight;
   div.style.opacity = 1;
   div.style.transform = 'transform(50% 50%)';

   // 消失
   setTimeout(() => {
      div.style.opacity = 0;
      div.style.transform = 'transform(50% 50%) transformY(-35px)';
      div.addEventListener("transitionend", function () {
         div.remove();

         callback && callback()
      }, { once: true })
   }, duration);
}