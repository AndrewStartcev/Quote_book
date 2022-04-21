<template>
  <div class="main-content">
    <div class="content">
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
    <FooterControles />
  </div>
</template>

<script></script>

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
  .content {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    text-align: center;
  }
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
</style>
