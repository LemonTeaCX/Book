<script setup lang="ts">
const getNexts = (pos: number[], max: number): number[][] => {
  let nexts: number[][] = []
  let x = pos[0]
  let y = pos[1]

  if (x-2 > -1 && y-1 > -1) nexts.push([ x-2, y-1 ])
  if (x-1 > -1 && y-2 > -1) nexts.push([ x-1, y-2 ])
  if (x+2 > -1 && y-1 > -1 && x+2 < max) nexts.push([ x+2, y-1 ])
  if (x+1 > -1 && y-2 > -1 && x+1 < max) nexts.push([ x+1, y-2 ])
  if (x+2 > -1 && y+1 > -1 && x+2 < max && y+1 < max) nexts.push([ x+2, y+1 ])
  if (x+1 > -1 && y+2 > -1 && x+1 < max && y+2 < max) nexts.push([ x+1, y+2 ])
  if (x-2 > -1 && y+1 > -1 && y+1 < max) nexts.push([ x-2, y+1 ])
  if (x-1 > -1 && y+2 > -1 && y+2 < max) nexts.push([ x-1, y+2 ])

  return nexts
}

const checkValidGrid = (grid: number[][]): boolean => {
  let isValid = true
  let len = grid.length
  let pos = [ 0,0 ]
  let step = 0

  if(grid[0][0] !== 0) {
    isValid = false
  }

  while(step <= (len * len - 2) && isValid) {
    const nexts = getNexts(pos, len)
    let hasNext = false

    step++

    for (let index = 0; index < nexts.length; index++) {
      const next = nexts[index]

      if (grid[next[0]][next[1]] === step) {
        pos = next
        hasNext = true
        break
      }
    }

    if (!hasNext) {
      isValid = false
    }
  }

  return isValid
}

const grid = [[0,11,16,5,20],[17,4,19,10,15],[12,1,8,21,6],[3,18,23,14,9],[24,13,2,7,22]]

console.log(checkValidGrid(grid))
</script>

<template>
  <h1>2596</h1>
</template>

<style scoped>
</style>
