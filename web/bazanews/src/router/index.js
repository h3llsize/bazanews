import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import NewsPage from '@/components/NewsPage';
import ActionsPage from '@/components/ActionsPage';
import EnterprisesPage from '@/components/EnterprisesPage';
import ProfilePage from '@/components/ProfilePage';
import NotFound from '@/components/NotFound';
import LoginPage from '@/components/LoginPage';
import SignupPage from '@/components/SignupPage';
import AdminPage from '@/components/AdminPage';

Vue.use(VueRouter);

const routes = [
  { name: 'news', component: NewsPage, path: '/news' },
  { name: 'actions', component: ActionsPage, path: '/actions' },
  { name: 'enterprises', component: EnterprisesPage, path: '/enterprises' },
  { name: 'profile', component: ProfilePage, path: '/profile', meta: { requiresAuth: true } },
  { name: 'login', component: LoginPage, path: '/login', meta: { requiresNotAuth: true } },
  { name: 'signup', component: SignupPage, path: '/signup', meta: { requiresNotAuth: true } },
  { name: 'admin', component: AdminPage, path: '/admin', meta: { requiresAuth: true, notUser: true } },
  { name: 'notFound', component: NotFound, path: '*' },
  { path: '/', redirect: { name: 'news' } },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.notUser)) {
    if (store.state.role > 0) {
      next();
      return;
    }
    next({ name: 'login' });
  } else if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.authorized) {
      next();
      return;
    }
    next({ name: 'login' });
  } else if(to.matched.some(record => record.meta.requiresNotAuth)) {
    if (!store.state.authorized) {
      next();
      return;
    }
    next({ name: 'news' })
  } else {
    next();
  }
})

export default router;
