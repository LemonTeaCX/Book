<script setup lang="ts">
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  let result = 0

  for (const num of nums) {
    result = fn(result || init, num)
  }

  return nums.length === 0 ? init : result
}

console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0));
</script>

<template>
</template>

<style scoped>
</style>
