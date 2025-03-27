<template>
    <div class="layout">
      <!-- Шапка сайта -->
      <header class="header bg-dark text-white py-3">
        <div class="container d-flex justify-content-between align-items-center">
          <h1 class="logo">
            <router-link to="/" class="text-white text-decoration-none">
              ASTANA MEDICAL UNIVERSITY NEWS
            </router-link>
          </h1>
          <nav class="navigation">
            <ul class="nav">
              <li class="nav-item"><router-link to="/" class="nav-link text-white"><i class="fas fa-home"></i> Home</router-link></li>
              <li class="nav-item"><router-link to="/medical" class="nav-link text-white"><i class="fas fa-heartbeat"></i> Medical</router-link></li>
              <li class="nav-item"><router-link to="/education" class="nav-link text-white"><i class="fas fa-graduation-cap"></i> Education</router-link></li>
              <li class="nav-item"><router-link to="/research" class="nav-link text-white"><i class="fas fa-flask"></i> Research</router-link></li>
              <li class="nav-item"><router-link to="/events" class="nav-link text-white"><i class="fas fa-calendar-alt"></i> Events</router-link></li>
            </ul>
            <div class="d-flex">
              <input type="search" placeholder="Search news..." class="form-control me-2" />
              <button class="btn btn-primary">Sign In</button>
            </div>
          </nav>
        </div>
      </header>
  
      <!-- Основной контент -->
      <main class="my-4">
        <div class="container">
          <slot></slot> <!-- Вставляется контент страницы -->
        </div>
      </main>
  
      <!-- Подвал -->
      <footer class="footer bg-dark text-white text-center py-3">
        <p>&copy; 2025 Astana Medical University. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  // Этот компонент Layout предоставляет базовую структуру страницы с шапкой, контентом и подвалом
  </script>
  
  <style scoped>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .logo {
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  footer p {
    margin: 0;
    font-size: 0.875rem;
  }
  
  .nav-link {
    font-size: 1.1rem;
  }
  
  .nav-link i {
    margin-right: 8px;
  }
  
  .search-input {
    transition: all 0.3s ease-in-out;
  }
  
  .search-input:focus {
    outline: none;
    border: 2px solid #007bff;
  }
  </style>
  