<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAlgorithm } from '@/use/useTool'

const { list:algorithmList } = useAlgorithm()
</script>

<template>
  <header>
    <nav>
      <RouterLink v-for="(item, index) in algorithmList" :key="index" :to="item.path">{{ item.name }}--{{ item.title }}</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
