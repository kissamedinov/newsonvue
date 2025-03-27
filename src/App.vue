<template>
    <div id="app">
      <Header /> <!-- Подключаем Header компонент -->
      <div class="container mt-5">
        <router-view /> <!-- Здесь будет отображаться динамический контент в зависимости от маршрута -->
      </div>
    </div>
  </template>
  
  <script setup>
  // Импорт компонента Header
  import Header from './components/Header.vue'; 
  </script>
  
  <style scoped>
  /* Здесь добавляем глобальные стили для всего приложения */
  #app {
    font-family: 'Arial', sans-serif;
    color: #333;
  }
  </style>
  