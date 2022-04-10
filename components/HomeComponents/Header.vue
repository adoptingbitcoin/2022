<template>
  <div class="header relative">
    <Container class="md:hidden">
      <Logo />
    </Container>
    <Container class="title-container">
      <div class="md:inline-block mr-4 hidden">
        <Logo />
      </div>
      <div class="inline-block vertical-align-bottom">
        <h1 class="text-3xl md:text-5xl">
          {{ $t('header.title') }}
        </h1>
        <h5 class="text-lg md:text-2xl">
          {{ $t('header.subtitle') }}
        </h5>
      </div>
      <div class="bg-gradient-to-r from-yellow via-red to-red rounded my-5" style="height: 5px" />
      <h5 class="text-lg md:text-2xl">
        {{ $t('header.date') }}
      </h5>
      <!--      <CTA href="#tickets">GET YOUR TICKET NOW</CTA>/-->
    </Container>
    <div class="w-full absolute right-0 top-0 flex items-center justify-end mt-3 mr-3">
      <div class="mr-5">
        <nuxt-link :to="switchLocalePath('en')" v-if="showLocale('en')">
          English
        </nuxt-link>
        <nuxt-link :to="switchLocalePath('es')" v-if="showLocale('es')">
          Español
        </nuxt-link>
      </div>
      <Menu class="inline-block vertical-align-middle" />
    </div>
  </div>
</template>

<script>
import Container from '~/components/Container'
import Logo from '~/components/Logo'
export default {
  name: 'Header',
  components: { Logo, Container },
  methods: {
    showLocale (locale) {
      return this.$i18n.locale !== locale
    }
  }
}
</script>

<style scoped>
.title-container{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}
  .header{
    color: white;
    position: relative;
    height: 80vh;
    width: 100%;
    background-image: url("~/assets/images/adopting_bitcoin_the_lightning_network.jpg");
    background-size: cover;
  }
  .vertical-align-bottom{
    vertical-align: bottom;
  }
</style>
