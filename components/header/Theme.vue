<template>
  <div class="main-header__theme">
    <button @click="onChangeTheme()" class="theme">
      <i v-if="theme == 'dark'" class="fa-solid fa-sun"></i>
      <i v-else class="fa-solid fa-moon"></i>
    </button>
  </div>
  <!-- /.main-header__theme -->
</template>

<script>
export default {
  data() {
    return {
      theme: '',
    }
  },
  methods: {
    onChangeTheme() {
      if (this.theme == 'dark') {
        this.theme = ''
        this.$emit('theme', { theme: this.theme })
        localStorage.removeItem('theme')
      } else {
        this.theme = 'dark'
        this.$emit('theme', { theme: this.theme })
        localStorage.setItem('theme', this.theme)
      }
    },
  },
  mounted() {
    if (localStorage.getItem('theme')) {
      this.theme = localStorage.getItem('theme')
    }
  },
}
</script>

<style lang="scss">
.main.dark {
  .main-header {
    &__theme {
      color: #ffffff;
    }
  }
}
</style>
