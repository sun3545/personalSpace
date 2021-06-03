<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ active: item.isSelect }" @click="handleClick(item)">{{
        item.name
      }}</span>
      <span
        v-if="item.aside"
        class="aside"
        :class="{ active: item.isSelect }"
        @click="handleClick(item)"
        >{{ item.aside }}</span
      >
      <RightList :list="item.children" @select="handleClick"></RightList>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    // [{name:"xxx",isSelect:true,chindren:[{name="yyy",isSelect:false,chindren:[{}]}]}]
    list: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    line-height: 40px;
    cursor: pointer;
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>