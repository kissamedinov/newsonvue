<template>
    <div class="not-found">
      <h1>404 - Страница не найдена</h1>
      <p>Извините, мы не смогли найти эту страницу.</p>
      <router-link to="/">Вернуться на главную</router-link>
    </div>
  </template>
  
  <script setup>
  // Этот компонент не нуждается в дополнительной логике
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    padding: 50px;
  }
  </style>
  