
// import Home from "@/views/Home";
// import About from "@/views/About";
// import Blog from "@/views/Blog";
// import Project from "@/views/Project";
// import Message from "@/views/Message";
// import BlogDetail from "@/views/Blog/Detail";
import NotFound from "@/views/NotFound";
export default [
    {
        name: "Home", path: "/", component: () => import(/*  webpackChunkName:"home" */"@/views/Home"), meta: {
            title: "首页"
        }
    },
    {
        name: "About", path: "/about", component: () => import(/*  webpackChunkName:"about" */"@/views/About"), meta: {
            title: "关于我"
        }
    },
    {
        name: "Blog", path: "/article", component: () => import(/*  webpackChunkName:"blog" */"@/views/Blog"), meta: {
            title: "文章"
        }
    },
    {
        name: "CategoryBlog", path: "/article/cate/:categoryId", component: () => import(/*  webpackChunkName:"blog" */"@/views/Blog"), meta: {
            title: "文章"
        }
    },
    {
        name: "BlogDetail", path: "/article/:id", component: () => import(/*  webpackChunkName:"blogDetail" */"@/views/Blog/Detail"), meta: {
            title: "文章详情"
        }
    },
    {
        name: "Project", path: "/project", component: () => import(/*  webpackChunkName:"project" */"@/views/Project"), meta: {
            title: "项目"
        }
    },
    {
        name: "Message", path: "/message", component: () => import(/*  webpackChunkName:"message" */"@/views/Message"), meta: {
            title: "留言"
        }
    },
    {
        name:"NotFound",
        path:"*",
        component:NotFound
    }
]