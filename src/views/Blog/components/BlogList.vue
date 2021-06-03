<template>
    <div class="blog-list-container" v-loading="isLoading" ref="mainContainer">
        <ul>
            <li v-for="item in data.rows" :key="item.id">
                <div class="thumb" v-if="item.thumb">
                    <RouterLink
                        :to="{
                            name: 'BlogDetail',
                            params: { id: item.id },
                        }"
                    >
                        <img
                            v-lazy="item.thumb"
                            alt="item.title"
                            :title="item.title"
                        />
                    </RouterLink>
                </div>
                <div class="main">
                    <RouterLink
                        :to="{
                            name: 'BlogDetail',
                            params: { id: item.id },
                        }"
                    >
                        <h2>{{ item.title }}</h2>
                    </RouterLink>
                    <div class="aside">
                        <span>日期：{{ formatDate(item.createDate) }}</span>
                        <span>浏览：{{ item.scanNumber }}</span>
                        <span>评论：{{ item.commentNumber }}</span>
                        <RouterLink
                            :to="{
                                name: 'CategoryBlog',
                                params: {
                                    categoryId: item.category.id,
                                },
                            }"
                            >{{ item.category.name }}</RouterLink
                        >
                    </div>
                    <div class="desc">
                        {{ item.description }}
                    </div>
                </div>
            </li>
        </ul>
        <Empty v-if="data.rows.length===0&&!isLoading"></Empty>
        <Pager
            v-if="data.total"
            :current="routeInfo.page"
            :total="data.total"
            :limit="routeInfo.limit"
            :visibleNumber="10"
            @pageChange="handlePageChange"
        ></Pager>
    </div>
</template>

<script>
import Pager from "@/components/Pager";
import Empty from "@/components/Empty";
import fetchDate from "@/mixins/fetchDate.js";
import { getBlogs } from "@/api/blog.js";
import { formatDate } from "@/utils";
import mainScroll from "@/mixins/mainScroll.js";

export default {
    mixins: [fetchDate({total:0,rows:[]}), mainScroll("mainContainer")],
    components: {
        Pager,
        Empty
    },
    methods: {
        async fetchDate() {
            return await getBlogs(
                this.routeInfo.page,
                this.routeInfo.limit,
                this.routeInfo.categoryId
            );
        },
        formatDate,
        handlePageChange(newPage) {
            // 跳转到 当前的分类id 当前的页容量 newPage的页码
            // /article?page=${newPage}&limit=${this.routeInfo.limit}
            // /article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
            const query = {
                page: newPage,
                limit: this.routeInfo.limit,
            };
            if (this.routeInfo.categoryId === -1) {
                // 没有分类
                this.$router.push({
                    name: "Blog",
                    query,
                });
            } else {
                this.$router.push({
                    name: "CategoryBlog",
                    query,
                    params: {
                        categoryId: this.routeInfo.categoryId,
                    },
                });
            }
        },

        // handleScroll() {
        //     this.$bus.$emit("mainScroll", this.$refs.mainContainer);
        // },
        // handleSetMainScroll(scrollTop) {
        //     this.$refs.mainContainer.scrollTop = scrollTop;
        // },
    },
    computed: {
        // 获取路由信息
        routeInfo() {
            const categoryId = +this.$route.params.categoryId || -1;
            const page = +this.$route.query.page || 1;
            const limit = +this.$route.query.limit || 10;
            return {
                categoryId,
                page,
                limit,
            };
        },
    },
    watch: {
        async $route(newVal, oldval) {
            this.isLoading = true;
            this.$refs.mainContainer.scrollTop = 0;
            this.data = await this.fetchDate();
            this.isLoading = false;
        },
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
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-list-container {
    line-height: 1.7;
    position: relative;
    padding: 20px;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
}
li {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid @gray;
    .thumb {
        flex: 0 0 auto;
        margin-right: 15px;
        img {
            display: block;
            max-width: 200px;
            border-radius: 5px;
        }
    }
    .main {
        flex: 1 1 auto;
        h2 {
            margin: 0;
        }
    }
    .aside {
        font-size: 12px;
        color: @gray;
        span {
            margin-right: 15px;
        }
    }
    .desc {
        margin: 15px 0;
        font-size: 14px;
    }
}
</style>