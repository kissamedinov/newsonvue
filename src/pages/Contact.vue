<template>
    <div class="contact">
      <h1>Свяжитесь с нами</h1>
      <p>Вы можете написать нам по email или позвонить.</p>
  
      <section class="contact-info">
        <p><strong>Email:</strong> example@email.com</p>
        <p><strong>Телефон:</strong> +7 (777) 123-45-67</p>
      </section>
  
      <section class="contact-form">
        <h2>Напишите нам</h2>
        <form @submit.prevent="submitForm">
          <input type="text" v-model="name" placeholder="Ваше имя" required />
          <input type="email" v-model="email" placeholder="Ваш email" required />
          <textarea v-model="message" placeholder="Ваше сообщение" required></textarea>
          <button type="submit">Отправить</button>
        </form>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const name = ref("");
  const email = ref("");
  const message = ref("");
  
  const submitForm = () => {
    alert(`Сообщение отправлено! Имя: ${name.value}, Email: ${email.value}`);
    name.value = "";
    email.value = "";
    message.value = "";
  };
  </script>
  
  <style scoped>
  .contact {
    padding: 20px;
    text-align: center;
  }
  
  .contact-info {
    margin-bottom: 20px;
    background: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: inline-block;
    text-align: left;
  }
  
  .contact-form {
    margin-top: 20px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    background: #333;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  