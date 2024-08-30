// 发布订阅模式

// 事件名
type EventName = string
// 回调函数
type CallBack = (...arg: any)=>void
// 所有事件
const events: Map<EventName, Set<CallBack>> = new Map()

const eventBus = {
  // 订阅
  on: (eventName: EventName, callBack: CallBack) => {
    if (!events.has(eventName)) {
      events.set(eventName, new Set())
    }

    events.get(eventName)?.add(callBack)
  },
  // 发布
  emit: (eventName: EventName, ...arg: any) => {
    events.get(eventName)?.forEach((callBack: CallBack) => callBack(...arg))
  },
  // 订阅一次
  once: (eventName: EventName, callBack: CallBack) => {
    eventBus.on(eventName, (...arg: any) => {
      callBack(...arg)
      eventBus.off(eventName)
    })
  },
  // 取消订阅
  off: (eventName: EventName) => {
    events.delete(eventName)
  },
}

export const useEventBus = () => eventBus
 