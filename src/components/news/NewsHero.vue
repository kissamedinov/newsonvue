<template>
    <div class="news-hero">
      <img :src="heroImage" alt="Hero Image" class="hero-image"/>
      <div class="hero-content">
        <h2 class="hero-title">{{ title }}</h2>
        <p class="hero-description">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Данные для баннера
  const title = ref('Главная новость недели!')
  const description = ref('Здесь будет описание важной новости, которая привлекает внимание пользователей.')
  const heroImage = ref('https://via.placeholder.com/1200x600')  // Замените на реальное изображение
  </script>
  
  <style scoped>
  .news-hero {
    position: relative;
    color: white;
    text-align: center;
    padding: 20px;
  }
  
  .hero-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    max-height: 400px;
  }
  
  .hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .hero-title {
    font-size: 2rem;
    font-weight: bold;
  }
  
  .hero-description {
    font-size: 1.25rem;
  }
  </style>
  