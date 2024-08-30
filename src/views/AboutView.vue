<script setup lang="ts">
const getDis = (rc1:number[], rc2:number[]) => (Math.abs(rc1[0]-rc2[0])+Math.abs(rc1[1]-rc2[1]))

const allCellsDistOrder = (rows: number, cols: number, rCenter: number, cCenter: number): number[][] => {
  let result = []

  for (let x=0; x<rows; x++) {
    for (let y=0; y<cols; y++) {
      result.push([ x, y ])
    }
  }

  result.sort((a, b) => (getDis(a, [ rCenter, cCenter ]) - getDis(b, [ rCenter, cCenter ])))

  return result
}

console.log(allCellsDistOrder(4,4,0,1))

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style scoped>
</style>
