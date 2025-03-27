<template>
    <div class="news">
      <h1>Новости</h1>
      <div class="news-list">
        <article v-for="news in newsList" :key="news.id" class="news-item">
          <h2>
            <router-link :to="'/news/' + news.id">{{ news.title }}</router-link>
          </h2>
          <p>{{ news.shortDescription }}</p>
        </article>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const newsList = ref([
    { id: 1, title: "Первая новость", shortDescription: "Краткое описание первой новости." },
    { id: 2, title: "Вторая новость", shortDescription: "Краткое описание второй новости." }
  ]);
  </script>
  
  <style scoped>
  .news {
    padding: 20px;
    text-align: center; 
  }
  
  .news-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
  }
  
  .news-item {
    background: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .news-item h2 {
    margin: 0;
  }
  
  .news-item a {
    text-decoration: none;
    color: #007bff;
  }
  
  .news-item a:hover {
    text-decoration: underline;
  }
  </style>
  