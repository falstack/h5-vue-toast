import Vue from 'vue'
import VueToast from './toast.vue'

const timeout = duration =>
  new Promise(resolve => {
    setTimeout(resolve, duration)
  })

function newVue() {
  let el = document.createElement('div')

  document.body.appendChild(el)

  return new Vue(VueToast).$mount(el)
}

export default class {
  constructor({ duration, timeout } = {}) {
    this._vm = newVue()
    this.duration = duration || 1500
    this.timeout = timeout || 1500
  }

  info(tip) {
    let text
    let time
    if (typeof tip === 'object') {
      text = tip.tip
      time = tip.time || this.duration
    } else {
      text = tip
      time = this.duration
    }

    this._vm.show({
      duration: time,
      message: text,
      type: 'info'
    })
    return timeout(this.timeout)
  }

  error(tip) {
    let text
    let time
    if (typeof tip === 'object') {
      text = tip.tip
      time = tip.time || this.duration
    } else {
      text = tip
      time = this.duration
    }
    this._vm.show({
      duration: time,
      message: text || '操作失败',
      type: 'error'
    })
    return timeout(this.timeout)
  }

  success(tip) {
    let text
    let time
    if (typeof tip === 'object') {
      text = tip.tip
      time = tip.time || this.duration
    } else {
      text = tip
      time = this.duration
    }
    this._vm.show({
      duration: time,
      message: text || '操作成功',
      type: 'success'
    })
    return timeout(this.timeout)
  }

  loading(tip) {
    this._vm.show({
      message: tip || '加载中…',
      type: 'loading'
    })
  }

  stop() {
    this._vm.hide()
  }
}
