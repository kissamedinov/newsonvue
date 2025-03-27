<template>
    <div class="home-page">
      <h1 class="text-center mb-5">Welcome to Astana Medical University News</h1>
      <CategorySection :category="'Education'" :articles="educationArticles" />
      <CategorySection :category="'Medical'" :articles="medicalArticles" />
      <CategorySection :category="'Research'" :articles="researchArticles" />
    </div>
  </template>
  
  <script setup>
  import CategorySection from '../components/CategorySection.vue'
  
  const educationArticles = [
    { id: 1, title: 'New Medical Simulation Center', excerpt: 'State-of-the-art simulation center...', image: '/images/simulation.jpg' },
    { id: 2, title: 'University Ranked Top 500', excerpt: 'Astana Medical University ranked...', image: '/images/ranking.jpg' }
  ]
  
  const medicalArticles = [
    { id: 1, title: 'New Telemedicine Program', excerpt: 'Telemedicine program launched...', image: '/images/telemedicine.jpg' },
    { id: 2, title: 'Medical Library Project', excerpt: 'Digital transformation for library...', image: '/images/library.jpg' }
  ]
  
  const researchArticles = [
    { id: 1, title: 'Annual Medical Ethics Symposium', excerpt: 'Annual event held to discuss...', image: '/images/ethics.jpg' },
    { id: 2, title: 'Groundbreaking Research on Antibiotics', excerpt: 'New research findings published...', image: '/images/research.jpg' }
  ]
  </script>
  
  <style scoped>
  .home-page {
    padding: 20px;
  }
  </style>
  