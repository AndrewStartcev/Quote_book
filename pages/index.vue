<template>
  <div class="main" :class="theme">
    <div class="main-header">
      <button @click="onChangeTheme()" class="main-header__theme">
        <i class="fa-solid fa-moon"></i>
      </button>
      <!-- /.main-header__theme -->
      <p class="main-header__name">Генератор цитат</p>
      <!-- /.main-header__name -->
      <button class="main-header__settings">
        <i class="fa-solid fa-gear"></i>
      </button>
      <!-- /.main-header__settings -->
    </div>
    <!-- /.main-header -->
    <div class="main-content">
      <div class="main-content__images">
        <img src="/images/clip-library.png" alt="" />
      </div>
      <!-- /.main-content__images -->
      <div class="main-content__quete">
        <p class="main-content__text">
          Если человек окажется подлинно искусным в логике и проявляет как
          здравое суждение, так и изобретательность, ему суждены большие дела,
          особенно когда времена этому благоприятствуют.
        </p>
        <!-- /.main-content__text -->
        <p class="main-content__author">Фрэнсис Бэкон</p>
        <!-- /.main-content__author -->
      </div>
      <!-- /.main-content__quete -->
    </div>
    <!-- /.main-content -->
    <div class="main-footer">
      <button class="main-footer__like">
        <i class="fa-solid fa-heart"></i>
      </button>
      <!-- /.main-footer__like -->
      <button class="main-footer__generate">
        <i class="fa-solid fa-arrows-rotate"></i>
      </button>
      <!-- /.main-footer__generate -->
      <button class="main-footer__copy">
        <i class="fa-solid fa-copy"></i>
      </button>
      <!-- /.main-footer__copy -->
    </div>
    <!-- /.main-footer -->
  </div>
</template>

<script>
export default {
  name: 'indexApp',
  data() {
    return {
      theme: '',
    }
  },
  methods: {
    onChangeTheme() {
      if (this.theme == 'dark') {
        this.theme = ''
        localStorage.removeItem('theme')
      } else {
        this.theme = 'dark'
        localStorage.setItem('theme', 'dark')
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

<style lang="scss" scoped>
.main {
  padding: 15px 15px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 0 auto;
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
    .main-header {
      &__theme,
      &__settings {
        color: #ffffff;
      }
    }
  }
}
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  &__theme,
  &__settings {
    font-size: 24px;
  }
  &__name {
    margin: 0 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.001em;
  }
}
.main-content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  text-align: center;
  &__images {
    margin: 0 8px 30px;
  }
  &__quete {
    margin: 0 20px;
    letter-spacing: 0.001em;
  }
  &__text {
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &__author {
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
  }
}
.main-footer {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__like,
  &__copy {
    padding: 12px 18px;
    background: #464b92;
    border-radius: 8px;
    font-size: 25px;
    color: #ffffff;
  }
  &__generate {
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    padding: 20px;
    border-radius: 100%;
    background: #202565;
    color: #ffffff;
  }
}
</style>
