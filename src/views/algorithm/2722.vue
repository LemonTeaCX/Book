<script setup lang="ts">
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

// function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
//   let obj: Record<number, ArrayType> = {}

//   arr1.forEach(item1 => {
//     obj[item1.id] = item1
//   })

//   arr2.forEach(item2 => {
//     if (obj[item2.id]) {
//       obj[item2.id] = { ...obj[item2.id], ...item2 }
//     } else {
//       obj[item2.id] = item2
//     }
//   })

//   return Object.keys(obj).map(item => obj[+item])
// }

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  let obj: Map<number, ArrayType> = new Map()

  arr1.forEach(item1 => {
    obj.set(item1.id, item1)
  })

  arr2.forEach(item2 => {
    if (obj.has(item2.id)) {
      obj.set(item2.id, { ...obj.get(item2.id), ...item2 })
    } else {
      obj.set(item2.id, item2)
    }
  })

  return Array.from(obj.values()).sort((a,b) => (a.id - b.id))
}

let arr1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
] 
let arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]

console.log(join(arr1, arr2))
</script>

<template>
</template>

<style scoped>
</style>
