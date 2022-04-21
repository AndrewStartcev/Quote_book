<template>
  <div class="main-content">
    <div class="main-content__images">
      <img src="/images/home.png" alt="" />
    </div>
    <!-- /.main-content__images -->
    <h2 class="main-content__title">Вход в админ-панель</h2>
    <div class="main-content__form">
      <input
        type="text"
        placeholder="Логин"
        v-model="login.user"
        :disabled="statusLoad"
        @input="hideAlert()"
        :class="{ 'is-invalid': isError }"
      />
      <input
        type="password"
        placeholder="Пароль"
        :disabled="statusLoad"
        :class="{ 'is-invalid': isError }"
        v-model="login.password"
        @input="hideAlert()"
      />
      <button :disabled="statusLoad || isError" @click="userLogin">Вход</button>
    </div>
    <transition
      name="transition-show-erorr"
      enter-active-class="animate__animated animate__shakeX"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div v-if="isError" class="auth-error">
        <p>{{ error }}</p>
      </div>
    </transition>
    <div class="main-content__back">Назад</div>
  </div>
</template>

<script>
import 'animate.css'
export default {
  data() {
    return {
      login: {
        user: '',
        password: '',
      },
      error: '',
      isError: false,
      statusLoad: false,
    }
  },
  methods: {
    async userLogin() {
      try {
        this.hideAlert()
        this.statusLoad = true
        await this.$auth.loginWith('local', { data: this.login })
      } catch (err) {
        this.statusLoad = false
        this.error = err.response.data.message
        this.isError = true
      }
    },
    hideAlert() {
      this.error = ''
      this.isError = false
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
    input {
      max-width: 350px;
      width: 100%;
      padding: 12px;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.001em;
      color: #28306d;
      border: 2px solid #202565;
      border-radius: 10px;
      margin-bottom: 10px;
      &.is-invalid {
        color: #f10031;
        border: 2px solid #f10031;
        &::placeholder {
          color: rgba(#f10031, 0.8);
        }
      }
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

      &:disabled,
      &[disabled] {
        opacity: 0.8;
      }
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
.auth-error {
  margin-top: 15px;
  padding: 15px 12px;
  background: rgba(#f10031, 0.3);
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.06em;
  color: #f10031;
}

.main.dark {
  .main-content {
    &__title {
      color: #ffffff;
    }
    &__form {
      input {
        border: 2px solid #464b92;
        color: #fff;
        &::placeholder {
          color: rgba(#fff, 0.5);
        }
        &.is-invalid {
          color: #f10031;
          border: 2px solid #f10031;
          &::placeholder {
            color: rgba(#f10031, 0.8);
          }
        }
      }
      button {
        background: #464b92;
        &:disabled,
        &[disabled] {
          opacity: 0.8;
        }
      }
    }
    &__back {
      color: #ffffff;
    }
  }
}
</style>
