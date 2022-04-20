<template>
  <div class="main" :class="theme">
    <div class="main-header">
      <button @click="onChangeTheme()" class="main-header__theme">
        <i class="fa-solid fa-moon"></i>
      </button>
      <!-- /.main-header__theme -->
      <p class="main-header__name">Генератор цитат</p>
      <!-- /.main-header__name -->
      <div class="main-header__settings">
        <button @click="onChangeSetting()" class="settings">
          <i class="fa-solid fa-gear"></i>
        </button>
        <div
          v-if="showSettings"
          @click="onChangeSetting()"
          class="settings__overlay"
        ></div>
        <transition
          name="transition-show-menu-setting"
          enter-active-class="animate__animated animate__fadeInDown"
          leave-active-class="animate__animated animate__fadeOutUp"
        >
          <div v-if="showSettings" class="settings__menu">
            <div class="settings__options">
              <label for="#">Шрифты</label>
              <multiselect
                v-model="currentFonts"
                :options="fonts"
                :searchable="false"
                :show-labels="false"
                :preselectFirst="true"
                :allowEmpty="false"
              ></multiselect>
            </div>
            <div class="settings__options">
              <label for="#">Категория</label>
              <multiselect
                v-model="currentCategory"
                :options="category"
                :searchable="false"
                :show-labels="false"
                :preselectFirst="true"
                :allowEmpty="false"
              ></multiselect>
            </div>
            <div class="settings__authors">
              <p>Сreared by <a href="#">Andrew Startcev</a></p>
              <p>
                Illustration by <a href="#">Rosina Gavrilash</a> from
                <a href="#">Ouch!</a>
              </p>
            </div>
            <!-- /.settings__authors -->
          </div>
        </transition>
      </div>
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
import 'animate.css'

export default {
  name: 'indexApp',
  data() {
    return {
      theme: '',
      showSettings: false,
      fonts: [
        'Gabriela',
        'Monotype Corsiva',
        'Forum',
        'Podkova',
        'Cormorant Infant',
      ],
      currentFonts: [],
      category: ['Все', 'Вдохновляющие', 'Бизнес', 'Спортивные', 'Научные'],
      currentCategory: [],
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
    onChangeSetting() {
      if (this.showSettings) {
        this.showSettings = false
      } else {
        this.showSettings = true
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
    .main-header {
      &__theme,
      &__settings {
        color: #ffffff;
      }
    }
    .settings {
      &__menu {
        color: #ffffff;
        background: #202565;
      }
      &__author {
        color: #dddddd;
      }
      &__options {
        color: #e7e6e6;
      }
    }
    .multiselect {
      &__single {
        color: #dddddd;
      }
      &__option {
        color: #dddddd;
      }
      .multiselect__option--selected.multiselect__option--highlight,
      .multiselect__option--highlight {
        background: #161a48;
        color: #e7e6e6;
      }
      &__content-wrapper {
        background: #202565;
      }
    }
  }
}
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
    button {
      color: inherit;
      font-size: inherit;
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
.main-content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  text-align: center;
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  &__images {
    margin: 0 8px 30px;
    img {
      max-width: 100%;
    }
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
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
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
.settings {
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: transparent;
  }
  &__menu {
    position: absolute;
    right: 0;
    top: calc(100% + 15px);
    padding: 14px 12px;
    min-width: 260px;
    background: #ffffff;
    box-shadow: 0px 0px 22px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    z-index: 10;
  }

  &__options {
    display: flex;
    justify-content: space-between;
    align-self: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 10px;
    color: #1b1b1b;
    label {
      color: inherit;
    }
  }

  &__authors {
    margin-top: 18px;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 0.001em;
    color: #7e7e7e;
    a {
      text-decoration: underline;
    }
  }
}
.multiselect {
  width: auto !important;
  min-height: auto;
  position: relative;
  &__select {
    height: 18px;
    width: 20px;
    padding: 0;
    transform: rotate(-90deg);
  }
  &__tags {
    min-height: auto;
    background: transparent;
    border: none;
    padding: 0px 30px 0px 5px;
  }
  &__single {
    background: transparent;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.001em;
    color: #a4a4a4;
    padding: 0;
    margin: 0;
    min-height: auto;
  }
  &__content-wrapper {
    min-width: 159px;
    left: auto;
    right: 0;
    background: #ffffff;
    box-shadow: 0px 0px 22px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 170px;
    border: none;
  }
  &__option {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.001em;
    color: #a4a4a4;
  }
  .multiselect__option--selected.multiselect__option--highlight,
  .multiselect__option--highlight {
    background: #f7f7f7;
    color: #212121;
  }
  .multiselect--active .multiselect__select {
    transform: rotate(-90deg);
  }
}
</style>
