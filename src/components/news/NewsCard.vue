<template>
  <div class="news-card">
    <img :src="imageUrl" alt="News Image" class="news-card-image" />
    <div class="news-card-body">
      <h3 class="news-card-title">{{ title }}</h3>
      <p class="news-card-excerpt">{{ excerpt }}</p>
      <div class="news-card-footer">
        <span>{{ views }} Views</span>
        <span>{{ comments }} Comments</span>
        <router-link :to="`/article/${id}`" class="btn btn-primary">Read More</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
  title: String,
  excerpt: String,
  imageUrl: String,
  category: String,
  date: String,
  views: Number,
  comments: Number
})
</script>

<style scoped>
.news-card {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.news-card-body {
  padding: 15px;
}

.news-card-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.news-card-excerpt {
  font-size: 1rem;
  color: #555;
}

.news-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 8px 12px;
  text-decoration: none;
  border-radius: 5px;
}
</style>
