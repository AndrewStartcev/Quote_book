<template>
  <div class="main-content">
    <div class="main-content__images">
      <img src="/images/home.png" alt="" />
    </div>
    <!-- /.main-content__images -->
    <h2 class="main-content__title">Добавить цитату</h2>
    <small class="main-content__text"
      >Кол-во цитат в базе: {{ countQuote }} шт.</small
    >
    <div class="main-content__form">
      <multiselect
        v-model="post.category"
        :options="category"
        :searchable="false"
        :show-labels="false"
        :allowEmpty="false"
        class="admin-multiselect"
        placeholder="Категория"
      ></multiselect>
      <input type="text" placeholder="Автор" v-model.trim="post.author" />
      <textarea
        rows="5"
        placeholder="Цитата"
        v-model.trim="post.quote"
      ></textarea>
      <button @click="newPost()">Добавить</button>
    </div>
    <button @click="logout()" class="main-content__back">Выйти</button>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      category: ['Вдохновляющие', 'Бизнес', 'Спортивные', 'Научные'],
      currentCategory: [],
      post: {
        category: [],
        author: '',
        quote: '',
      },
      countQuote: 0,
    }
  },
  async asyncData({ $axios }) {
    try {
      let countQuote = await $axios.$get(`/api/quote/count/`)
      return { countQuote }
    } catch (e) {
      return
    }
  },
  methods: {
    async newPost() {
      if (!true) {
      } else {
        try {
          await this.$axios
            .$post(
              `/api/quote/`,
              { data: this.post },
              {
                headers: {
                  authorization: this.$auth.$storage._state['_token.local'],
                },
              }
            )
            .then()
          console.log('Добавил')
        } catch (e) {
          console.log(e)
        }
      }
    },
    logout() {
      this.$auth.logout()
    },
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
      max-width: 40%;
    }
  }
  &__title {
    margin: 10px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.001em;
    color: #1b1b1b;
  }
  &__text {
    margin-bottom: 10px;
    font-size: 12px;
    opacity: 0.8;
  }
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
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
    &__placeholder {
      padding-bottom: 0;
      margin-bottom: 0;
      color: #757575;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      text-align: left;
      letter-spacing: 0.001em;
    }
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
    &__placeholder {
      color: rgba(#fff, 0.5);
    }
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
