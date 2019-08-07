<template>
  <div id="app">
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <button @click="showToast('info')">info</button>
    <button @click="showToast('error')">error</button>
    <button @click="showToast('success')">success</button>
    <button @click="showLoading">loading</button>
    <button @click="stop">stop</button>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    showToast(type) {
      this.$toast[type](type).then(() => {
        console.log(type)
      })
    },
    showLoading() {
      this.$toast.loading('loading')
    },
    stop() {
      this.$toast.stop()
    }
  }
}
</script>
