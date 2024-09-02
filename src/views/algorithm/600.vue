<script setup lang="ts">
const findIntegers = (num:number):number => {
  let result = 0
  let n = 0

  while (n <= num) {
    console.log(n, n.toString(2));
    
    if (n.toString(2).indexOf('11') === -1) {
      result++
    }

    n++
  }

  return result
}

console.log(findIntegers(100));


</script>

<template>
  <h1>600</h1>
</template>

<style scoped>
</style>
