<template>
    <div class="blog-category-container" v-loading="isLoading">
        <h2>文章分类</h2>
        <RightList :list="list" @select="handlerSelect"></RightList>
    </div>
</template>

<script>
import RightList from "./RightList";
import fetchData from "@/mixins/fetchDate.js";
import { getBlogTypes } from "@/api/blog.js";
export default {
    mixins: [fetchData([])],
    components: {
        RightList,
    },
    methods: {
        async fetchDate() {
            return await getBlogTypes();
        },
        handlerSelect(item) {
            const query = {
                page: 1,
                limit: this.limit,
            };
            if (item.id == -1) {
                this.$router.push({
                    name: "Blog",
                    query,
                });
            } else {
                this.$router.push({
                    name: "CategoryBlog",
                    query,
                    params: {
                        categoryId: item.id,
                    },
                });
            }
        },
    },
    computed: {
        limit() {
            return +this.$route.query.limit || 10;
        },
        categoryId() {
            return +this.$route.params.categoryId || -1;
        },
        list() {
            const totalArticleCount = this.data.reduce((num, item) => {
                return (num += item.articleCount);
            }, 0);
            const result = [
                { name: "全部", id: -1, articleCount: totalArticleCount },
                ...this.data,
            ];
            return result.map((item) => ({
                isSelect: item.id == this.categoryId,
                aside: `${item.articleCount}篇`,
                ...item,
            }));
        },
    },
};
</script>

<style lang="less" scoped>
.blog-category-container {
    width: 300px;
    height: 100%;
    font-size: 14px;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    overflow-y: auto;
    h2 {
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 1em;
        margin: 0;
    }
}
</style>