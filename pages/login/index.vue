<template>
  <div class="main-content">
    <div class="main-content__images">
      <img src="/images/home.png" alt="" />
    </div>
    <!-- /.main-content__images -->
    <h2 class="main-content__title">Вход в админ-панель</h2>
    <div class="main-content__form">
      <input type="text" placeholder="Логин" />
      <input type="password" placeholder="Пароль" />
      <button>Вход</button>
    </div>
    <div class="main-content__back">Назад</div>
  </div>
</template>

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
      }
      button {
        background: #464b92;
      }
    }
    &__back {
      color: #ffffff;
    }
  }
}
</style>
