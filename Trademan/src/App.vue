<script setup>
  import Header from './components/Header.vue'
  import Trade from './components/Trade.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <div class="bg-[#161a1e]">
    <Header/>
    <div class="mb-20 mx-auto place-content-center pb-4 px-4 lg:w-[95%] animate-fade">
      <Trade/>
    </div>
    <div class="mt-auto">
      <Footer/>
    </div>
  </div>
</template>

