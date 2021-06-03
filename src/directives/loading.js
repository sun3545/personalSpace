// 导出全局对象的配置对象
// export default {
//     bind(el, binding) {
//         // 创建一个img元素，放到el元素内部
//     },
//     // inserted(el, binding){
//     //     console.log("inserted")
//     // },
//     update(el, binding) {
//         // 根据 bingding.value 的值,决定是否创建或删除img元素
//     }
// }
import loadingUrl from "@/assets/loading.svg";
import styles from './loading.module.less';

// 判断el中是否存在loading效果的img
function getLoadingImg(el) {
    return el.querySelector("img[data-role=loading]")
}
function createImg() {
    const img = document.createElement("img")
    img.dataset.role = "loading"
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}
//  另一种写法
export default function (el, binding) {
    // 根据 binding.value 的值，决定创建或删除
    const curImg = getLoadingImg(el);
    if (binding.value) {
        if (!curImg) {
            const img = createImg();
            el.appendChild(img)
        }
    } else if (curImg) {
        curImg.remove();
    }
    return;
}