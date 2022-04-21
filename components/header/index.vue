<template>
  <div class="main-header">
    <HeaderTheme @theme="theme" />

    <p class="main-header__name">Генератор цитат</p>

    <HeaderSettengs @theme="theme" />
  </div>
  <!-- /.main-header -->
</template>

<script>
export default {
  methods: {
    theme(data) {
      this.$emit('theme', { theme: data.theme })
    },
  },
}
</script>

<style lang="scss">
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 15px;
  &__theme,
  &__settings {
    position: relative;
    font-size: 24px;
    & > button {
      position: relative;
      color: inherit;
      font-size: inherit;
      z-index: 999;
      i {
        transition: transform 0.5s ease;
      }
      &:active {
        i {
          transform: rotate(360deg);
        }
      }
    }
  }
  &__name {
    margin: 0 10px;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.001em;
  }
}
</style>
