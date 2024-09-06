<script setup lang="ts">
</script>

<template>
  <div class="list">
    <div class="item"><RouterLink to="/">Home</RouterLink></div>
    <div class="item"><RouterLink to="/about">About</RouterLink></div>
    <div class="item"><RouterLink to="/algorithm">algorithm</RouterLink></div>
    <div class="item"><RouterLink to="/tbb">tbb</RouterLink></div>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  
}
.list a {
  color: aquamarine;
}
</style>