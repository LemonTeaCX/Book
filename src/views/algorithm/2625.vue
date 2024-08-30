<script setup lang="ts">
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = (arr:MultiDimensionalArray, n:number):MultiDimensionalArray => {
  let newArr:MultiDimensionalArray = []

  const flatArr = (arr:MultiDimensionalArray, n:number) => {
    for (const item of arr) {
      if (n > 0 && Array.isArray(item)) {
        flatArr(item, n-1)
      } else {
        newArr.push(item)
      }
    }
  }

  flatArr(arr, n)

  return newArr
}

const arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]]

console.log(flat(arr, 1));

</script>

<template>
  <h1>2625</h1>
</template>

<style scoped>
</style>
