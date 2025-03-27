<template>
    <div class="news-detail">
      <h1>{{ news?.title }}</h1>
      <p>{{ news?.content }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  
  const route = useRoute();
  const news = ref(null);
  
  const newsData = [
    { id: 1, title: "Первая новость", content: "Полный текст первой новости." },
    { id: 2, title: "Вторая новость", content: "Полный текст второй новости." }
  ];
  
  onMounted(() => {
    news.value = newsData.find(n => n.id === Number(route.params.id));
  });
  </script>
  
  <style scoped>
  .news-detail {
    padding: 20px;
    text-align: center;
  }
  </style>
  