<template>
  <div class="right-list-container">
    <RightList :list="list" @select="handleSelect"></RightList>
  </div>
</template>

<script>
import RightList from "./RightList";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "one", isSelect: true },
        { name: "two", isSelect: false },
        {
          name: "three",
          isSelect: false,
          children: [
            { name: "two-1", isSelect: false },
            { name: "two-1", isSelect: false },
            {
              name: "two-1",
              isSelect: false,
              children: [
                { name: "two-2", isSelect: false },
                { name: "two-2", isSelect: false },
                { name: "two-2", isSelect: false },
              ],
            },
          ],
        },
        { name: "froe", isSelect: false },
      ],
    };
  },
  methods: {
    handleSelect(item) {
        console.log(item)
    },
  },
};
</script>

<style>
</style>