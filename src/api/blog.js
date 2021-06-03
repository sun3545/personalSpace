import request from "./request";

// 获取博客列表数据
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    return request.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid
        }
    })
}


/**
 * @description: 获取博客分类
 * @param {*}
 * @return {*}
 */
export async function getBlogTypes() {
    return await request.get("/api/blogtype")
}
/**
 * @description: 获取评论
 * @param {*} id
 * @return {*}
 */
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`)
}
/**
 * @description: 提交评论
 * @param {*} commentInfo
 * @return {*}
 */
export async function postComment(commentInfo) {
    return await request.post(`/api/comment`, commentInfo)
}
/**
 * @description: 获取评论
 * @param {*} blogId    当前页面
 * @param {*} page      页容量
 * @param {*} limit     所属文章，-1表示不限
 * @return {*}
 */
export async function getComments(blogId, page = 1, limit = 10,) {
    return await request.get(`/api/comment`, {
        params: {
            blogId,
            page,
            limit
        }
    })
}