<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAlgorithm } from '@/use/useTool'

const { list:algorithmList } = useAlgorithm()
</script>

<template>
  <header>
    <nav>
      
    </nav>
  </header>

  <div class="list">
    <div class="item" v-for="(item, index) in algorithmList" :key="index">
      <RouterLink :to="item.path">{{ item.name }}--{{ item.title }}</RouterLink>
    </div>
  </div>

  <RouterView />
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
