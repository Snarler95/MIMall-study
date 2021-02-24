<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.getUser()
    this.getCartCount()
  },
  methods: {
    getUser() {
      this.axios.get('/user').then(() => {

      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then(() => {

      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/button.scss';
</style>
