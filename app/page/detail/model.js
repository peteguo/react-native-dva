import * as service from './service';
import { AsyncStorage } from 'react-native'

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
        *init({ payload = {} }, { call, put }) {
            const user = yield AsyncStorage.getItem('user')
            const accesstoken = yield AsyncStorage.getItem('accesstoken')
            const webim_user = yield AsyncStorage.getItem('webim_user')
            const webim_accesstoken = yield AsyncStorage.getItem('webim_accesstoken')
            if (user) yield put({ type: 'user', payload: JSON.parse(user) })
            if (accesstoken) yield put({ type: 'token', payload: accesstoken })
            if (webim_user && webim_accesstoken) yield put({ type: 'webim_user', payload: { user: JSON.parse(webim_user), access_token: webim_accesstoken } })
        },
        *query({ payload = {} }, { call, put }) {
            const { page = 1, tab } = payload
            console.log(payload)
            console.log(page)
            yield put({ type: 'tab', payload: tab });
            yield put({ type: 'loading', payload: true });
            const { data, err } = yield call(service.queryTopics, payload);
            yield put({ type: 'loading', payload: false });
            if (err) return console.log(err)
            yield put({ type: 'page', payload: page });
            if (page == 1) yield put({ type: 'query/success', payload: data });
            else yield put({ type: 'more/success', payload: data });
        },
    },
    reducers: {
        'query/success'(state, { payload }) {
            const [, data] = payload
            const topics = service.parseTopics(data.data)
            return { ...state, data: topics };
        },
        'more/success'(state, { payload }) {
            const [, data] = payload
            const topics = service.parseTopics(data.data)
            return { ...state, data: [...state.data, ...topics] };
        },
    },
    subscriptions: {},
};
