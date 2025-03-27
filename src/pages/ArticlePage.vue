<template>
    <Layout>
      <div class="article-page">
        <NewsCard :article="article" />
        <SocialShare :article="article" />
        <Button @click="goBack">Back</Button>
        <Separator />
        <div class="article-details">
          <Avatar :src="article.author.avatar" :alt="article.author.name" />
          <span>{{ article.author.name }}</span>
          <span>{{ article.date }}</span>
        </div>
        <div class="article-body" v-html="article.content"></div>
      </div>
    </Layout>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import Layout from '@/components/layout/Layout.vue'
  import NewsCard from '@/components/news/NewsCard.vue'
  import SocialShare from '@/components/news/SocialShare.vue'
  import { Button } from '@/components/ui/button'
  import { Separator } from '@/components/ui/separator'
  import { Avatar } from '@/components/ui/avatar'
  
  // Получаем параметры маршрута для статьи
  const route = useRoute()
  const router = useRouter()
  
  // Данные для статьи
  const article = ref({})
  
  // Функция для загрузки статьи
  const loadArticle = () => {
    const articleId = route.params.id // Получаем id из параметров маршрута
    // Здесь будет логика для загрузки статьи по articleId, например, из mockData
    article.value = getArticleById(articleId)
  }
  
  // Функция для возврата назад
  const goBack = () => {
    router.go(-1)
  }
  
  onMounted(() => {
    loadArticle()
  })
  </script>
  
  <style scoped>
  .article-page {
    padding: 20px;
  }
  .article-details {
    display: flex;
    align-items: center;
  }
  .article-body {
    margin-top: 20px;
  }
  </style>
  