<template>
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
            class="settengs-multiselect"
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
            class="settengs-multiselect"
          ></multiselect>
        </div>
        <div class="settings__authors">
          <button @click="onShowAuthors()">
            <i class="fa-regular fa-copyright"></i>Авторы
          </button>
        </div>
        <!-- /.settings__authors -->
      </div>
    </transition>
    <transition
      name="transition-show-menu-setting"
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__bounceOut"
    >
      <div v-if="showAuthors" class="authors">
        <div @click="onHideAuthors()" class="authors__overlay"></div>
        <div class="authors__content">
          <button @click="onHideAuthors()" class="authors__close">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div class="authors__item">
            Идея, дизайн и разработка: <br />
            <a href="#">Андрей Старцев</a>
          </div>
          <div class="authors__item">
            Иллюстрации: <br />
            <a href="#">Rosina Gavrilash</a> и <a href="#">Ouch</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <!-- /.main-header__settings -->
</template>

<script>
import 'animate.css'

export default {
  data() {
    return {
      showSettings: false,
      showAuthors: false,
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
    onChangeSetting() {
      if (this.showSettings) {
        this.showSettings = false
        this.showAuthors = false
      } else {
        this.showSettings = true
      }
    },
    onShowAuthors() {
      this.showAuthors = true
    },
    onHideAuthors() {
      this.showAuthors = false
    },
  },
}
</script>

<style lang="scss">
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
    margin-top: 40px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.001em;
    color: #1b1b1b;
    i {
      margin-right: 5px;
    }
  }
}
.settengs-multiselect.multiselect {
  width: auto !important;
  min-height: auto;
  position: relative;
  .multiselect {
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
.authors {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: transparent;
  }
  &__content {
    max-width: 768px;
    margin: 0 auto;
    width: calc(100% - 30px);
    padding: 20px 14px;
    background: #ffffff;
    box-shadow: 0px 0px 22px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    position: relative;
  }
  &__close {
    position: absolute;
    top: 14px;
    right: 14px;
    font-size: 17px;
  }
  &__item {
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #1b1b1b;
    a {
      text-decoration-line: underline;
      color: #202565;
    }
  }
}
.main.dark {
  .main-header {
    &__settings {
      color: #ffffff;
    }
  }
  .settings {
    &__menu {
      color: #ffffff;
      background: #202565;
    }
    &__authors {
      button {
        color: #ffffff;
      }
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
  .authors {
    &__content {
      color: #ffffff;
      background: #202565;
    }
    &__item,
    &__close {
      color: #ffffff;
      a {
        color: #ffffff;
      }
    }
  }
}
</style>
