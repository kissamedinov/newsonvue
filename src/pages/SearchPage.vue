<template>
    <Layout>
      <div class="search-page">
        <div class="search-bar">
          <Input v-model="searchQuery" placeholder="Search for news..." />
          <Button @click="searchNews">
            <Search /> Search
          </Button>
        </div>
        
        <Tabs v-if="tabs.length > 0">
          <TabsList>
            <TabsTrigger v-for="tab in tabs" :key="tab" :value="tab">{{ tab }}</TabsTrigger>
          </TabsList>
          <TabsContent v-for="tab in tabs" :key="tab" :value="tab">
            <div v-if="results[tab]">
              <div v-for="article in results[tab]" :key="article.id">
                <NewsCard :article="article" />
              </div>
              <div v-if="currentPage[tab] < totalPages[tab]">
                <Button @click="loadMore(tab)">
                  Load More
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <Separator />
      </div>
    </Layout>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import Layout from '@/components/layout/Layout.vue'
  import NewsCard from '@/components/news/NewsCard.vue'
  import { Input } from '@/components/ui/input'
  import { Button } from '@/components/ui/button'
  import { Separator } from '@/components/ui/separator'
  import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
  import { Search } from 'lucide-vue'
  
  // Локальные переменные
  const searchQuery = ref('')
  const results = ref({})
  const tabs = ref(['All', 'Category1', 'Category2'])
  const currentPage = ref({ 'All': 1, 'Category1': 1, 'Category2': 1 })
  const totalPages = ref({ 'All': 5, 'Category1': 5, 'Category2': 5 })
  
  // Функция для поиска новостей
  const searchNews = () => {
    // Логика поиска (можно использовать API или mockData для получения результатов)
    results.value = {
      'All': getArticlesBySearch(searchQuery.value),
      'Category1': getArticlesBySearch(searchQuery.value, 'Category1'),
      'Category2': getArticlesBySearch(searchQuery.value, 'Category2'),
    }
  }
  
  // Функция для загрузки дополнительных результатов (пагинация)
  const loadMore = (tab) => {
    currentPage.value[tab] += 1
    results.value[tab] = getArticlesBySearch(searchQuery.value, tab, currentPage.value[tab])
  }
  
  </script>
  
  <style scoped>
  .search-page {
    padding: 20px;
  }
  
  .search-bar {
    display: flex;
    gap: 10px;
  }
  
  .tabs-content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .separator {
    margin-top: 20px;
  }
  </style>
  