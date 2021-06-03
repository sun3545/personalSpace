
import request from "./request";
export async function getBanner() {
    return await request.get("/api/banner")
    // const msg = await data.data.msg;
    // showMessage({
    //    content:msg
    // })
}
// getBanner().then((r)=>{console.log(r)})