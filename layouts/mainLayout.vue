<template>
    <div>
      <NuxtPage />
    </div>
  </template>
  
  <script>
  import Navbar from './components/Header.vue';
  export default {
    name: 'mainLayout',
    components: {
      Navbar,
    },
    layout: 'login-layout',
    
  };
  </script>
  