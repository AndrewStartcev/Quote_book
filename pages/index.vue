<template>
  <div class="main-content">
    <div class="content">
      <div class="main-content__images">
        <img src="/images/clip-library.png" alt="" />
      </div>
      <!-- /.main-content__images -->
      <div class="main-content__quete">
        <p class="main-content__text">
          {{ quote.quote }}
        </p>
        <!-- /.main-content__text -->
        <p class="main-content__author">{{ quote.author }}</p>
        <!-- /.main-content__author -->
      </div>
      <!-- /.main-content__quete -->
    </div>
    <div class="main-footer">
      <button class="main-footer__like">
        <i class="fa-solid fa-heart"></i>
      </button>
      <!-- /.main-footer__like -->
      <button @click="randomQuote()" class="main-footer__generate">
        <i class="fa-solid fa-arrows-rotate"></i>
      </button>
      <!-- /.main-footer__generate -->
      <button @click="copyQuote()" class="main-footer__copy">
        <i class="fa-solid fa-copy"></i>
      </button>
      <!-- /.main-footer__copy -->
      <input
        type="text"
        ref="copyText"
        style="display: none"
        :value="quote.quote"
      />
    </div>
    <!-- /.main-footer -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentCategory: [''],
      quote: {
        count: null,
        category: [],
        author: '',
        quote: '',
      },
    }
  },
  async asyncData({ $axios }) {
    try {
      let quoteCount = await $axios.$get(`/api/quote/count/`)
      let randomId = Math.floor(Math.random() * (Number(quoteCount) - 1) + 1)
      let quote = await $axios.$get(`/api/quote/${randomId}`)
      return { quote }
    } catch (e) {
      return
    }
  },
  computed: {},
  methods: {
    randomQuote() {
      this.$axios.$get(`/api/quote/count/`).then((res) => {
        let quoteCount = res
        let randomId =
          this.getRandomIntInclusive(quoteCount, 1) != this.quote.count
            ? this.getRandomIntInclusive(quoteCount, 1)
            : this.getRandomIntInclusive(quoteCount, 1) + 1
        this.$axios.$get(`/api/quote/${randomId}`).then((res) => {
          this.quote = res
        })
      })
    },
    copyQuote() {
      console.log(this.$refs.copyText.value)
    },
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min //Максимум и минимум включаются
    },
  },
}
</script>

<style lang="scss">
.main-content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-self: stretch;
  text-align: center;
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  //
  .content {
    flex: 1 1 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-self: stretch;
    text-align: center;
  }
  &__images {
    display: flex;
    padding: 0 8px 30px;
    img {
      max-width: 100%;
    }
  }
  &__quete {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
