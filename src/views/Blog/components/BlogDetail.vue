<template>
  <div class="blog-detail-container" v-if="blog">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span
        >日期：{{
          blog.createDate ? formatDate(blog.createDate) : "00-00-00"
        }}</span
      >
      <span>浏览：{{ blog.scanNumber }}</span>
      <a href="#form-container">评论：{{ blog.commentNumber }}</a>
      <RouterLink
        :to="{
          name: 'CategoryBlog',
          params: {
            categoryId: BlogCategoryId,
          },
        }"
        >{{ blog.category ? blog.category.name : "" }}</RouterLink
      >
    </div>
    <div v-html="blog.htmlContent"></div>
  </div>
</template>

<script>
import formatDate from "@/utils/formatDate";
import "highlight.js/styles/github.css";
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
  },
  computed: {
      BlogCategoryId(){
          return `${this.blog.category?this.blog.category.id:1}`
      }
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-detail-container {
  .aside {
    font-size: 12px;
    color: @gray;
    span,
    a {
      margin-right: 15px;
    }
  }
}
</style>