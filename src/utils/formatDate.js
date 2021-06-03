export default function (timeTamp,showTime = false) {
    const date = new Date(+timeTamp);
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const day = date.getDate().toString().padStart(2, "0")
    let str = `${date.getFullYear()}-${month}-${day}`
    if(showTime){
        const hours = date.getHours().toString().padStart(2, "0")
        const minute = date.getMinutes().toString().padStart(2, "0")
        const second = date.getSeconds().toString().padStart(2, "0")
        return str+= `${hours}:${minute}:${second}`
    }else{
        return str;
    }

}