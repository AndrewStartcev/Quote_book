<template>
  <div class="main" :class="themeClass">
    <Header @theme="theme" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'default',
  data() {
    return {
      themeClass: '',
    }
  },
  methods: {
    theme(data) {
      this.themeClass = data.theme
    },
  },
  mounted() {
    if (localStorage.getItem('theme')) {
      this.themeClass = localStorage.getItem('theme')
    }
  },
}
</script>

<style lang="scss">
.main {
  padding: 15px 15px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #1b1b1b;
  background: #ffffff;
  &-header {
    &__theme,
    &__settings {
      color: #28306d;
    }
  }
  &.dark {
    background: #11163a;
    color: #ffffff;
  }
}
</style>
