<script setup lang="ts">
type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
  const argMap = new Map()
    
  return function(...args) {
    let key = args.join('&')
    
    if(argMap.has(key)) {
      return argMap.get(key)
    } else {
      let result = fn(...args)

      argMap.set(key, result)

      return result
    }
  }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
</script>

<template>
  <h1>2623</h1>
</template>

<style scoped>
</style>
