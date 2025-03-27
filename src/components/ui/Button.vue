<template>
    <button :class="['btn', variant]" @click="onClick">
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  defineProps({
    variant: {
      type: String,
      default: 'primary' // Например, primary или secondary
    },
    onClick: {
      type: Function,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .btn {
    padding: 10px 20px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }
  .btn.primary {
    background-color: #007bff;
    color: white;
  }
  .btn.primary:hover {
    background-color: #0056b3;
  }
  </style>
  