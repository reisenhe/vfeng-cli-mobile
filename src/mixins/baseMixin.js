import request from '@/utils/request'
export const baseMixin = {
    data() {
        return {
            langUrl: 'zh_cn'
        }
    },
    methods: {
        // 基础 api 请求
        requestApi(apiUrl, data) {
            const paramData = Object.assign({
                "hotels_id":"42"
            }, data)
            return request.post(apiUrl, paramData)
        },
        // 路由跳转传参
        navigateTo(name, query) {
            this.$router.push({name, query})
        }
    },
}