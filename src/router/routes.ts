const HomePage = () => import('@/views/Home/HomePage.vue')

export const routes = [
  {
    component: HomePage,
    name: 'home',
    path: '/',
  },
]
