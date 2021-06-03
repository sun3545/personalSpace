<template>
    <div class="blog-toc-container">
        <h2>目录</h2>
        <RightList :list="tocWithSelect" @select="handlerSelect"></RightList>
    </div>
</template>

<script>
import RightList from "./RightList";
import { debounce } from "@/utils";
export default {
    components: {
        RightList,
    },
    props: {
        toc: {
            type: Array,
        },
    },
    data() {
        return {
            activeAnchor: "",
        };
    },
    computed: {
        tocWithSelect() {
            const getTOC = (toc = []) => {
                return toc.map((t) => ({
                    ...t,
                    isSelect: t.anchor == this.activeAnchor,
                    children: getTOC(t.children),
                }));
            };
            return getTOC(this.toc);
        },
        doms() {
            const doms = [];

            const addToDoms = (toc) => {
                for (const t of toc) {
                    doms.push(document.getElementById(t.anchor));
                    if (t.children && t.children.length) {
                        addToDoms(t.children);
                    }
                }
            };
            addToDoms(this.toc);
            return doms;
        },
    },
    created() {
        this.setSelectDebounce = debounce(this.setSelect, 50);
        this.$bus.$on("mainScroll", this.setSelectDebounce);
    },
    destroyed() {
        this.$bus.$off("mainScroll", this.setSelectDebounce);
    },
    methods: {
        handlerSelect(item) {
            // console.log(item)
            location.hash = item.anchor;
        },
        setSelect(scrollDom) {
            if (!scrollDom) {
                return;
            }
            this.activeAnchor = "";
            const range = 200;
            for (const dom of this.doms) {
                if (!dom) {
                    continue;
                }
                const top = dom.getBoundingClientRect().top;
                if (top >= 0 && top <= range) {
                    // 指定范围之内
                    this.activeAnchor = dom.id;
                    location.hash = dom.id;
                    return;
                } else if (top > range) {
                    // 指定范围之下
                    return;
                } else {
                    // 指定范围之上
                    this.activeAnchor = dom.id;
                }
            }
        },
    },
};
</script>

<style lang="less" scoped>
.blog-toc-container {
    width: 300px;
    box-sizing: border-box;
    padding: 20px;
    overflow: hidden;
    h2 {
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 2em;
        margin: 0;
    }
}
</style>