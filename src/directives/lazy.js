import eventBus from '@/eventBus.js';
import { debounce } from '@/utils';
import defaultGif from '@/assets/default.gif';

let images = [];

function setImg(img) {
    img.dom.src = defaultGif;   // 使用默认图片
    // 处理图片,图片是否在视口范围内
    const clientHeight = document.documentElement.clientHeight;
    const rest = img.dom.getBoundingClientRect();
    const height = rest.height || 150
    // console.log(rest)
    if (rest.top >= -height && rest.top <= clientHeight) {
        const tempImg = new Image();
        tempImg.onload = function () {
            // 真实图片加载完成之后
            img.dom.src = img.src;
        }

        tempImg.src = img.src;
        images = images.filter(item => item !== img)

    }




}
function setImages() {
    for (const item of images) {
        // 处理图片
        setImg(item)
    }
}
function handelScroll(dom) {
    setImages()
}

eventBus.$on("mainScroll", debounce(handelScroll, 50))
export default {
    inserted(el, bindings) {
        const img = {
            dom: el,
            src: bindings.value,
        }
        images.push(img)
        // 立即处理
        setImg(img)
    },
    unbind(ele) {
        images = images.filter((img) => img.dom !== ele)
    }
}