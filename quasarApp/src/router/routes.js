
const routes = [
  {
    mode: 'history',
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/localLogin', component: () => import('pages/LocalLoginPage.vue') },
      { path: '/join', component: () => import('pages/JoinPage.vue') },
      { path: '/main', component: () => import('pages/MainPage.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
