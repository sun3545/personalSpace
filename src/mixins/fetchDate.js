// 公共的远程获取数据的代码
// 具体的组件中，需要提供一个远程获取数据的方法，fetchDate 
    //
export default function (defaultDateValue = null){
    return {
        data() {
            return {
                isLoading: true,
                data: defaultDateValue
            };
        },
        async created() {
            this.data = await this.fetchDate();
            this.isLoading = false;
        }
    }
}