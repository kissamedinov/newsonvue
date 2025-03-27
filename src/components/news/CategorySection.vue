<template>
    <div class="category-section mb-5">
      <h2 class="text-center">{{ category }} News</h2>
      <div class="row">
        <div v-for="(article, index) in articles" :key="index" class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img :src="article.image" alt="Article Image" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <p class="card-text">{{ article.excerpt }}</p>
              <router-link :to="`/article/${article.id}`" class="btn btn-primary">Read more</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    category: String,
    articles: Array
  })
  </script>
  
  <style scoped>
  .category-section h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .card-title {
    font-size: 1.2rem;
  }
  
  .card-text {
    font-size: 1rem;
    color: #555;
  }
  
  .card-img-top {
    object-fit: cover;
    height: 200px;
  }
  
  .card-body {
    transition: all 0.3s ease-in-out;
  }
  
  .card-body:hover {
    transform: translateY(-5px);
  }
  
  .card {
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
  }
  
  .card:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  </style>
  