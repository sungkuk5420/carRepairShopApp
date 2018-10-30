
const routes = [
  {
    mode: 'history',
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MainPage.vue') },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/localLogin', component: () => import('pages/LocalLoginPage.vue') },
      { path: '/join', component: () => import('pages/JoinPage.vue') },
      { path: '/main', component: () => import('pages/MainPage.vue') },
      { path: '/event', component: () => import('pages/EventPage.vue') },
      { path: '/estimate', component: () => import('pages/EstimatePage.vue') },
      { path: '/motores', component: () => import('pages/MotorPage.vue') },
      { path: '/eventDetails', component: () => import('pages/EventDetailsPage.vue') },
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
