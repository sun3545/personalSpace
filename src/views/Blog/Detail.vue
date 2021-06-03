<template>
    <Layout>
        <div ref="mainContainer" class="main-container" v-loading="isLoading">
            <BlogDetail :blog="data"></BlogDetail>
            <BlogComment v-if="!isLoading"></BlogComment>
        </div>
        <template #right>
            <div class="right-container" v-loading="isLoading">
                <BlogTOC :toc="data.toc" v-if="data"></BlogTOC>
            </div>
        </template>
    </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchDate.js";
import { getBlog } from "@/api/blog.js";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment";
import mainScroll from "@/mixins/mainScroll.js";
import { setTitle } from "@/utils";


export default {
    mixins: [fetchData({}),mainScroll("mainContainer")],

    components: {
        Layout,
        BlogDetail,
        BlogTOC,
        BlogComment,
    },

    methods: {
        async fetchDate() {
            const resp = await getBlog(this.$route.params.id);
            if(!resp){
                this.$router.push({name:"NotFound"});
                return;
            }
            setTitle.setRouteTitle(resp.title)
            return resp;
        },
        // handleScroll() {
        //     this.$bus.$emit("mainScroll", this.$refs.mainContainer);
        // },
        // handleSetMainScroll(scrollTop) {
        //     this.$refs.mainContainer.scrollTop = scrollTop;
        // },
    },
    // mounted() {
    //     this.$bus.$on("setMainScroll", this.handleSetMainScroll);

    //     this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
    // },
    // beforeDestroy() {
    //     this.$bus.$emit("mainScroll");

    //     this.$refs.mainContainer.removeEventListener(
    //         "scroll",
    //         this.handleScroll
    //     );
    //     this.$bus.$off("setMainScroll", this.handleSetMainScroll);
    // },
    updated() {
        const hash = location.hash;
        location.hash = "";
        this.$refs.mainContainer.clientHeight;
        location.hash = hash;
    },
};
</script>
<style lang="less" scoped>
.main-container {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    scroll-behavior: smooth;
}
.right-container {
    height: 100%;
    width: 300px;
    box-sizing: border-box;
    padding: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
}
</style>