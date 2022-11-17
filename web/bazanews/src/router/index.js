import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsSection from '@/components/NewsSection';
import ActionsSection from '@/components/ActionsSection';
import EnterprisesSection from '@/components/EnterprisesSection';
import ProfileSection from '@/components/ProfileSection';
import NotFound from '@/components/NotFound';

Vue.use(VueRouter);

const routes = [
  { name: 'news', component: NewsSection, path: '/news' },
  { name: 'actions', component: ActionsSection, path: '/actions' },
  { name: 'enterprises', component: EnterprisesSection, path: '/enterprises' },
  { name: 'profile', component: ProfileSection, path: '/profile' },
  { name: 'notFound', component: NotFound, path: '*' },
  { path: '/', redirect: { name: 'news' } },
];

const router = new VueRouter({
  routes,
});

export default router;
