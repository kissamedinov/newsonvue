<template>
    <div class="about">
      <h1>О нас</h1>
      <p>Мы — ведущий источник медицинских новостей.</p>
  
      <section class="team">
        <article class="member" v-for="(member, index) in team" :key="index">
          <h2>{{ member.name }}</h2>
          <p>{{ member.role }}</p>
        </article>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const team = ref([
    { name: "Доктор Иванов", role: "Главный редактор" },
    { name: "Доктор Петров", role: "Медицинский обозреватель" },
  ]);
  </script>
  
  <style scoped>
  .about {
    padding: 20px;
    text-align: center;
  }
  
  .team {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }
  
  .member {
    background: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  