import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsPage from '@/components/NewsPage';
import ActionsPage from '@/components/ActionsPage';
import EnterprisesPage from '@/components/EnterprisesPage';
import ProfilePage from '@/components/ProfilePage';
import NotFound from '@/components/NotFound';

Vue.use(VueRouter);

const routes = [
  { name: 'news', component: NewsPage, path: '/news' },
  { name: 'actions', component: ActionsPage, path: '/actions' },
  { name: 'enterprises', component: EnterprisesPage, path: '/enterprises' },
  { name: 'profile', component: ProfilePage, path: '/profile' },
  { name: 'notFound', component: NotFound, path: '*' },
  { path: '/', redirect: { name: 'news' } },
];

const router = new VueRouter({
  routes,
});

export default router;
