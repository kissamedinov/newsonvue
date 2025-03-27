<template>
    <div class="category-page">
      <h2>{{ category }} News</h2>
      <div class="row">
        <div v-for="(article, index) in articles" :key="index" class="col-md-4">
          <div class="card shadow-sm">
            <img :src="article.image" alt="Article Image" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <p class="card-text">{{ article.excerpt }}</p>
              <router-link :to="`/article/${article.id}`" class="btn btn-primary">Read more</router-link>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Пагинация с иконками -->
      <div class="pagination-icons mt-4">
        <ArrowLeft class="icon" />
        <ArrowRight class="icon" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
  
  const props = defineProps({
    category: String,
    articles: Array
  })
  </script>
  
  <style scoped>
  .category-page {
    padding: 20px;
  }
  
  .pagination-icons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  
  .icon {
    font-size: 24px;
    cursor: pointer;
  }
  </style>
  