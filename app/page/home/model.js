
export default {
    namespace: 'home',
    state: {
        page: 1,
        tab: 'all',
        data: [],
        user: {},
        accesstoken: '',
        webim_user: {},
        webim_accesstoken: '',      // 因为home页面最先加载，因此把用户信息都存在home,其他页面从中提取
        loading: false,
        isLogin: false,
    },
    effects: {

    },
    reducers: {

    },
    subscriptions: {},
};
