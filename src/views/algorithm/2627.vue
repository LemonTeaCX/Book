<script setup lang="ts">
type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
  let timer:any = -1

  return (...args: any[]) => {
    clearTimeout(timer)

    timer = setTimeout(() => fn(...args), t)
  }
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
</script>

<template>
  <h1>2627</h1>
</template>

<style scoped>
</style>
