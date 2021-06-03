<template>
  <div class="icon-container">
    <div class="item" v-for="t in types" :key="t">
      <Icon :type="t" />
      <label>{{ t }}</label>
    </div>
  </div>
</template>

<script>
import Icon, { types } from "./";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      types,
    };
  },
};
</script>

<style lang="less" scoped>
.icon-container {
  display: flex;
  margin: 100px auto;
  flex-wrap: wrap;
  .item {
    margin: 0 10px;
  }
}
</style>