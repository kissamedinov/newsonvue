import { createRouter, createWebHistory } from 'vue-router'

// Ленивая загрузка страниц
const Index = () => import('@/pages/Index.vue')           // Главная страница
const ArticlePage = () => import('@/pages/ArticlePage.vue') // Страница статьи
const CategoryPage = () => import('@/pages/CategoryPage.vue') // Страница категории
const SearchPage = () => import('@/pages/SearchPage.vue')  // Страница поиска
const NotFound = () => import('@/pages/NotFound.vue')  // Страница 404

const routes = [
  { path: '/', component: Index }, // Главная страница
  { path: '/article/:id', component: ArticlePage }, // Страница статьи с динамическим ID
  { path: '/category/:category', component: CategoryPage }, // Страница категории с динамическим параметром
  { path: '/search', component: SearchPage }, // Страница поиска
  { path: '/:pathMatch(.*)*', component: NotFound }, // Для несуществующих маршрутов
]

const router = createRouter({
  history: createWebHistory(),  // История браузера (для нормальных URL)
  routes,  // Все маршруты
})

export default router
