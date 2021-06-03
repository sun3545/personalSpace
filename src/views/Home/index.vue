
<template>
  <div v-loading="loading" class="home-container" @wheel="handerWheel">
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      ref="container"
      @transitionend="handleTranstionend"
    >
      <li v-for="item in data" :key="item.id" >
        <Carouselitem :carousel="item"></Carouselitem>
      </li>
    </ul>
    <div class="icon icon-up" v-show="index >= 1" @click="switchTo(index - 1)">
      <Icon type="arrowUp"></Icon>
    </div>
    <div
      class="icon icon-down"
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown"></Icon>
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{
          active: i === index,
        }"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import Carouselitem from "./Carouselitem";
import Icon from "@/components/Icon";
// import { getBanner } from "@/api/banner";
// import fetchDate from "@/mixins/fetchDate.js";
import {mapState} from 'vuex';

export default {
//   mixins: [fetchDate([])],
  components: {
    Carouselitem,
    Icon,
  },
  data() {
    return {
      index: 0,
      containerHeight: 0,
      swiching: false, //是否正在切换中
    };
  },
  created(){
    this.$store.dispatch('banner/fetchBanner')
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);

  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner",["loading","data"])
  },
  methods: {
    // async fetchDate() {
    //   return await getBanner();
    // },
    switchTo(i) {
      this.index = i;
    },
    handerWheel(e) {
      if (this.swiching) {
        return;
      }

      if (e.deltaY > 0 && this.index > 0) {
        this.swiching = true;
        this.index--;
      } else if (e.deltaY < 0 && this.index < this.data.length - 1) {
        this.swiching = true;
        this.index++;
      }
    },
    handleTranstionend() {
      this.swiching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
  // beforeCreate(){
  //    console.log('实例创建之后，注入之前',this.message)
  // },
  // created(){
  //    console.log("注入之后，生成Vnode之前", this.message)
  // },
  // beforeMount(){
  //    console.log("生成Vnone(虚拟DOM树)，真实DOM之前", document.getElementsByClassName('home-container'))
  // },
  // mounted(){
  //    console.log("生成真实DOM，挂载之前", document.getElementsByClassName('home-container'))
  // }
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
  .icon {
    .self-center(absolute);
    font-size: 30px;
    color: @gray;
    @gap: 15px;
    cursor: pointer;
    transform: translateX(-50%);
    &.icon-up {
      top: @gap;
      animation: jump-up 2s linear infinite;
    }
    &.icon-down {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s linear infinite;
    }
    @keyframes jump-up {
      0% {
        transform: translate(-50%, 10px);
      }
      50% {
        transform: translate(-50%, -10px);
      }
      100% {
        transform: translate(-50%, 10px);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -10px);
      }
      50% {
        transform: translate(-50%, 10px);
      }
      100% {
        transform: translate(-50%, -10px);
      }
    }
  }
  .carousel-container {
    width: 100%;
    height: 100%;
    transition: .5s;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .indicator {
    .self-center();
    transform: translateY(-50%);
    left: auto;
    right: 20px;
    li {
      width: 7px;
      height: 7px;
      background: @words;
      border-radius: 50%;
      border: 1px solid #fff;
      box-sizing: border-box;
      margin-bottom: 10px;
      transition: 0.5s;
      cursor: pointer;
      &.active {
        background: #fff;
      }
    }
  }
}
</style>

