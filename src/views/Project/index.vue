<template>
    <div class="project-container" ref="project-container" v-loading="loading">
        <a
            v-for="item in data"
            :href="item.url ? item.url : 'javascript:void(0)'"
            :key="item.id"
            :target="item.url ? '_blank' : '_self'"
            class="project-item"
        >
            <img v-lazy="item.thoumb" alt="" class="thomb" />
            <div class="info">
                <h2 v-if="item">
                    {{ item.name }}
                    <a :href="item.github">github</a>
                </h2>
                <p v-for="(desc, i) in item.description" :key="i">{{ desc }}</p>
            </div>
        </a>
        <ToTop></ToTop>
    </div>
                          


</template>

<script>
import mainScroll from "@/mixins/mainScroll";
import ToTop from "@/components/ToTop";
import { mapState } from "vuex";
export default {
    mixins: [mainScroll("project-container")],
    computed: mapState("project", ["data", "loading"]),
    created() {
        this.$store.dispatch("project/fetchProject");
    },
    components:{
        ToTop,
    }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.project-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    overflow-y: auto;
    scroll-behavior: smooth;
}
.project-item {
    transition: 0.5s;
    padding: 20px;
    display: flex;
    margin-bottom: 20px;
    &:hover {
        box-shadow: -1px 1px 5px #000;
        transform: scale(1.01) translate(3px, -3px);
        color: inherit;
    }
    .thumb {
        width: 250px;
        min-height: 150px;
        flex: 0 0 auto;
        object-fit: cover;
        border-radius: 5px;
        margin-right: 15px;
    }
    .info {
        line-height: 1.7;
        flex: 1 1 auto;
        h2 {
            margin: 0;
        }
    }
    .github {
        font-size: 14px;
        color: @primary;
    }
    img {
        width: 300px;
        height: 250px;
        vertical-align: middle;
    }
}
</style>
