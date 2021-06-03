<template>
  <nav class="menu-container">
    <RouterLink
      :exact="item.exact"
      active-class="selected"
      exact-active-class=""
      v-for="item in items"
      :key="item.link"
      :to="{name:item.name}"
    >
      <div class="icon">
        <Icon :type="item.icon"></Icon>
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>
      
// :class="{ selected: isSelected(item) }"
<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact:true
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact:false
        },
        {
          name: "About",
          title: "关于",
          icon: "about",
          exact:false

        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact:false
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact:false
        },
      ],
    };
  },
//   methods: {
//     isSelected(item) {
//        const link = item.link.toLowerCase();
//        const path = location.pathname.toLowerCase();
//        if(item.startWith){
//           return path.startsWith(link)
//        }else{
//           return path === link;
//        }
//       // return location.pathname.toLowerCase() == path.toLowerCase();
//     },
//   },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
    &.selected  {
      background: #2d2d2d;
    }
  }
}
</style>