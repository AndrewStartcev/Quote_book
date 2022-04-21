<template>
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
</template>

<style lang="scss">
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
</style>
