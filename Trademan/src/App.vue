<script setup>
  import Header from './components/Header.vue'
  import Trade from './page/Trade/Trade.vue'
  import Footer from './components/Footer.vue'

</script>

<template>
  <div>
    <Header/>
      <router-view></router-view>
    <Footer/>
  </div>
</template>

