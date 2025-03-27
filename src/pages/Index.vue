<template>
  <Layout>
    <div class="category-section">
      <CategorySection 
        v-for="(category, index) in categories" 
        :key="index" 
        :category="category" 
        :articles="mockData[category]"
      />
    </div>
  </Layout>
</template>

<script setup>
import Layout from '@/components/layout/Layout.vue'
import CategorySection from '@/components/news/CategorySection.vue'

// Моковые данные для новостей
const mockData = {
  Education: [
    {
      title: 'New Medical Simulation Center Enhances Clinical Training',
      excerpt: 'State-of-the-art medical simulation center opens at Astana Medical University.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Astana Medical University Ranked Among Top 500 in Global University Rankings',
      excerpt: 'Astana Medical University has been ranked among the top 500 universities globally.',
      image: 'https://via.placeholder.com/300x200'
    }
  ],
  Medical: [
    {
      title: 'Astana Medical University Introduces New Telemedicine Program',
      excerpt: 'The university has launched a new telemedicine program to train future doctors.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Medical Library Completes Digital Transformation Project',
      excerpt: 'The medical library has gone through a major digital transformation.',
      image: 'https://via.placeholder.com/300x200'
    }
  ],
  Research: [
    {
      title: 'Groundbreaking Research on Antibiotic Resistance Published by University Team',
      excerpt: 'Researchers have published promising findings on combating antibiotic resistance.',
      image: 'https://via.placeholder.com/300x200'
    }
  ],
  Events: [
    {
      title: 'Annual Medical Ethics Symposium Addresses Emerging Challenges in Healthcare',
      excerpt: 'Experts discussed ethical considerations in emerging medical technologies.',
      image: 'https://via.placeholder.com/300x200'
    }
  ]
}

const categories = ['Education', 'Medical', 'Research', 'Events']
</script>

<style scoped>
.category-section {
  padding: 20px;
}
</style>
