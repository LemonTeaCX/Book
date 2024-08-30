<script setup lang="ts">
type MultidimensionalArray = (MultidimensionalArray | number)[]

function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
  for (let item of arr) {
    if (typeof item === 'number') {
      yield item
    } else {
      yield* inorderTraversal(item)
    }
  }
}

const gen = inorderTraversal([1, [2, 3]]);
console.log(gen.next().value) // 1
console.log(gen.next().value) // 2
console.log(gen.next().value) // 3
</script>

<template>
</template>

<style scoped>
</style>
