<template>
    <div class="about-container" v-loading='loading||!srcLoaded'>
        <iframe :src="src" class="about-content" frameborder="0" @load="srcLoaded=true"></iframe>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    data(){
        return {
            srcLoaded:false
        }
    },
    // computed:mapState("about",["data"])
    computed:mapState("about",{
        src:"data",
        loading:"loading"
    }),
    created(){
        this.$store.dispatch("about/fetchData")
    }
};
</script>

<style lang="less" scoped>
.about-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    .about-content {
        width: 100%;
        height: 100%;
        display: block;
        box-sizing: border-box;
    }
}
</style>