<template>
    <div class="latest-news">
      <h2>Последние новости</h2>
      <div class="news-list">
        <div v-for="(article, index) in latestArticles" :key="index" class="news-item">
          <img :src="article.image" alt="Article Image" class="news-image"/>
          <div class="news-info">
            <h3 class="news-title">{{ article.title }}</h3>
            <p class="news-excerpt">{{ article.excerpt }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Моковые данные для последних новостей
  const latestArticles = ref([
    {
      title: 'Последняя новость 1',
      excerpt: 'Краткое описание последней новости 1.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Последняя новость 2',
      excerpt: 'Краткое описание последней новости 2.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Последняя новость 3',
      excerpt: 'Краткое описание последней новости 3.',
      image: 'https://via.placeholder.com/300x200'
    }
  ])
  </script>
  
  <style scoped>
  .latest-news {
    padding: 20px;
  }
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  .news-list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .news-item {
    flex: 1;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .news-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .news-info {
    padding: 10px;
  }
  
  .news-title {
    font-size: 1.25rem;
    font-weight: bold;
  }
  
  .news-excerpt {
    font-size: 1rem;
    color: #555;
  }
  </style>
  