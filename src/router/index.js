import Vue from 'vue'
import VueRouter from 'vue-router'

import StartApp from '../components/StartApp.vue'

Vue.use(VueRouter)

// Vue Router를 관리하는 객체
export const router = new VueRouter({
    mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            // path: url 경로, component: 표시될 컴포넌트
            path: '/',
            name: 'App',
            component: StartApp,
            props: true,
        },
    ]
})

export default router
