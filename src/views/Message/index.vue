<template>
    <div class="message-container" ref="messageContainer">
        <MessageArea
            title="留言板"
            :subTitle="`${data.total}`"
            :isListLoading="isLoading"
            :list="data.rows"
            @submit="handleSubmit"
        ></MessageArea>
                <ToTop></ToTop>


    </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchDate";
import mainScroll from "@/mixins/mainScroll";
import ToTop from "@/components/ToTop";
import * as msgApi from "@/api/message";
export default {
    mixins: [fetchData({ total: 0, rows: [] }), mainScroll("messageContainer")],
    data() {
        return {
            page: 1,
            limit: 10,
        };
    },
    components: {
        MessageArea,
        ToTop,

    },
    computed: {
        hasMore() {
            return this.data.rows.length < this.data.total;
        },
    },
    methods: {
        async fetchDate() {
            return msgApi.getMessage(this.page, this.limit);
        },
        async handleSubmit(data, callback) {
            const resp = await msgApi.postMessage(data);
            callback("感谢留言");
            this.data.rows.unshift(resp);
        },
        handleScroll(dom) {
            if (this.isLoading || !dom) {
                return;
            }
            const range = 100;
            const des = Math.abs(
                dom.scrollTop + dom.clientHeight - dom.scrollHeight
            );

            if (des <= range) {
                this.fetchMore();
            }
        },
        // 加载下一页
        async fetchMore() {
            if (!this.hasMore) {
                return;
            }
            this.isLoading = true;
            this.page++;
            const resp = await this.fetchDate();
            this.data.total = resp.total;
            this.data.rows = this.data.rows.concat(resp.rows);
            this.isLoading = false;
        },
    },
    created() {
        this.$bus.$on("mainScroll", this.handleScroll);
    },
    destroyed() {
        this.$bus.$off("mainScroll", this.handleScroll);
    },
};
</script>

<style lang="less" scoped>
.message-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 25px 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
.message-area-container {
    width: 700px;
    margin: 0 auto;
}
</style>