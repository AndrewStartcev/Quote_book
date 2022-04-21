<template>
  <div class="main-content">
    <div class="main-content__images">
      <img src="/images/home.png" alt="" />
    </div>
    <!-- /.main-content__images -->
    <h2 class="main-content__title">Добавить цитату</h2>
    <div class="main-content__form">
      <multiselect
        v-model="currentCategory"
        :options="category"
        :searchable="false"
        :show-labels="false"
        :preselectFirst="true"
        :allowEmpty="false"
        class="admin-multiselect"
      ></multiselect>
      <input type="text" placeholder="Автор" />
      <textarea name="" id="" rows="5" placeholder="Цитата"></textarea>
      <button>Добавить</button>
    </div>
    <div class="main-content__back">Выйти</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: ['Все', 'Вдохновляющие', 'Бизнес', 'Спортивные', 'Научные'],
      currentCategory: [],
    }
  },
}
</script>

<style lang="scss">
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
    margin: 0 8px 0px;
    img {
      max-width: 100%;
    }
  }
  &__title {
    margin: 20px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.001em;
    color: #1b1b1b;
  }
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input,
    textarea {
      max-width: 350px;
      width: 100%;
      padding: 12px;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      text-align: left;
      letter-spacing: 0.001em;
      color: #28306d;
      border: 2px solid #202565;
      border-radius: 10px;
      margin-bottom: 10px;
    }
    button {
      max-width: 350px;
      width: 100%;
      margin-top: 10px;
      padding: 14px;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.001em;
      color: #ffffff;
      background: #202565;
      border-radius: 10px;
    }
  }
  &__back {
    margin-top: auto;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.001em;
    color: #464b92;
  }
}
.admin-multiselect.multiselect {
  position: relative;
  max-width: 350px;
  width: 100%;
  .multiselect {
    &__tags {
      padding: 12px;
      color: #28306d;
      border: 2px solid #202565;
      border-radius: 10px;
      margin-bottom: 10px;
    }
    &__single {
      background: transparent;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.001em;
      color: #28306d;
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
      border-radius: 9px;
      height: 170px;
      border: none;
    }
    &__option {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.001em;
      color: #28306d;
    }
  }
  .multiselect__option--selected.multiselect__option--highlight,
  .multiselect__option--highlight {
    background: #202565;
    color: #fff;
  }
  .multiselect--active .multiselect__select {
    transform: rotate(-90deg);
  }
}

.main.dark {
  .main-content {
    &__title {
      color: #ffffff;
    }
    &__form {
      input,
      textarea {
        border: 2px solid #464b92;
        color: #fff;
        &::placeholder {
          color: rgba(#fff, 0.5);
        }
      }
      button {
        background: #464b92;
      }
    }
    &__back {
      color: #ffffff;
    }
  }
  .admin-multiselect .multiselect {
    background: #11163a;
  }
  .admin-multiselect .multiselect {
    &__tags {
      border: 2px solid #464b92;
      background: #11163a;
    }
    &__single {
      color: #fff;
    }
    &__select {
      &::before {
        border-color: #fff transparent transparent;
      }
    }
    &__option {
      color: #fff;
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
</style>
