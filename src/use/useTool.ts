import type { RouteRecordRaw } from 'vue-router'
import { algorithm } from '@/datas/algorithm'
import type { Algorithm } from '@/datas/algorithm'

// leetcode算法模块
export const useAlgorithm = () => {
  let list: (RouteRecordRaw & Algorithm)[] = []
  let routes:RouteRecordRaw[] = []

  algorithm.forEach(item => {
    let no = item.no
    let route = {
      name: no,
      path: `/algorithm/${no}`,
      component: () => import(`../views/algorithm/${no}.vue`),
    }

    routes.push(route)
    list.push({
      ...item,
      ...route,
    })
  })

  return { routes, list }
}

// 对象克隆
export const useClone = (obj: any) => JSON.parse(JSON.stringify(obj))

// 获取随机数,结果为0-num 包括0不包括num
export const useRandom = (num: number) => Math.floor(Math.random()*num)

// const px2vw = (px: number): string => `${px/750*100}vw`
