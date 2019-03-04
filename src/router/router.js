import Vue from 'vue'
import Router from 'vue-router'
import {
    routers
} from './index'
import iView from 'iview';

Vue.use(iView);
Vue.use(Router)

// 路由配置
const RouterConfig = {
    // mode: 'history',
    routes: routers,
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    },
    // scrollBehavior(to, from, savedPosition) {
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   if (from.meta.keepAlive) {
    //     from.meta.savedPosition = document.body.scrollTop;
    //   }
    //   return {
    //     x: 0,
    //     y: to.meta.savedPosition || 0
    //   }
    // }
    // }
};

export const router = new Router(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
});
