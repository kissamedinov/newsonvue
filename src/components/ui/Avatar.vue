<template>
    <div class="avatar">
      <img :src="src" :alt="alt" class="avatar-image" />
    </div>
  </template>
  
  <script setup>
  defineProps({
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .avatar {
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
  }
  .avatar-image {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
  </style>
  