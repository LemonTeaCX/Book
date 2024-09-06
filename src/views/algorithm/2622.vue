<script setup lang="ts">
class TimeLimitedCache {
  private data = new Map()
  
  set(key: number, value: number, duration: number): boolean {
    let hasKey = this.get(key) !== -1

    if (hasKey) {
      clearTimeout(this.data.get(key)[1])
    }

    let timer = setTimeout(() => {
      this.data.delete(key)
    }, duration)

    this.data.set(key, [value, timer])

    return hasKey
  }
  
  get(key: number): number {
    return this.data.has(key) ? this.data.get(key)[0] : -1
  }
  
  count(): number {
    return this.data.size
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
</script>

<template>
  <h1>2622</h1>
</template>

<style scoped>
</style>
