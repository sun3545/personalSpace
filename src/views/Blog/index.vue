<template>
  <div class="blog-container">
      <Layout>
          <BlogList></BlogList>
          <template #right>
              <BlogCategory></BlogCategory>
                      <ToTop></ToTop>

          </template>
      </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "./components/BlogList";
import BlogCategory from "./components/BlogCategory";
import ToTop from "@/components/ToTop";

export default {
    components:{
        Layout,
        BlogList, 
        BlogCategory,
        ToTop,

    }
}
</script>

<style lang="less" scoped>
    .blog-container{
        height: 100%;
    }
</style>
