<template>
    <div class="site-aside-container">
        <template v-if="data">
            <Avatar :url="data.avatar"></Avatar>
            <h1 class="title">{{ data.siteTitle }}</h1>
        </template>
        <Menu></Menu>
        <Contact v-if="data"></Contact>
        <p class="footer" v-if="data">{{ data.icp }}</p>
    </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";

export default {
    components: {
        Avatar,
        Menu,
        Contact,
    },
    computed: mapState("setting", ["data"]),
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
    width: 100%;
    height: 100%;
    background: @dark;
    padding: 20px 0;
    box-sizing: border-box;
    overflow-y: auto;
}
.avatar-container {
    display: block;
    margin: 0 auto;
}
.footer {
    text-align: center;
    font-size: 12px;
}
.title {
    font-size: 1.2em;
    color: #fff;
    text-align: center;
}
</style>