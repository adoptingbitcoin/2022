<template>
  <div class="header relative text-white">
    <RepeatingImage
      :image="require('~/assets/images/hero1.jpg')"
      :mobile-image="require('~/assets/images/hero1_mobile.jpg')"
      :repeat-left="require('~/assets/images/hero1_left.jpg')"
      :repeat-right="require('~/assets/images/hero1_right.jpg')"
    >
      <div class="md:inline-block mr-4 hidden">
        <!-- <Logo /> -->
      </div>
      <div class="w-fit-content text-shadow">
        <h1 class="text-3xl md:text-5xl">
          {{ $t('header.title') }}
        </h1>
        <h5 class="text-lg md:text-2xl">
          {{ $t('header.subtitle') }}
        </h5>
        <div class="bg-white rounded my-5" style="height: 5px" />

        <h5 class="text-lg md:text-2xl">
          {{ $t('header.date') }}
        </h5>
        <CTA class="shadow-none hidden md:block" href="#tickets">BUY YOUR TICKET</CTA>
      </div>
    </RepeatingImage>
    <div class="w-full absolute right-0 top-0 flex items-center justify-end mt-3 mr-3">
<!--      <div class="mr-5">-->
<!--        <nuxt-link :to="switchLocalePath('en')" v-if="showLocale('en')">-->
<!--          English-->
<!--        </nuxt-link>-->
<!--        <nuxt-link :to="switchLocalePath('es')" v-if="showLocale('es')">-->
<!--          Español-->
<!--        </nuxt-link>-->
<!--      </div>-->
      <Menu class="inline-block vertical-align-middle" />
    </div>
    <div class="mx-auto">
      <CTA class="shadow-none md:hidden mx-auto" href="#tickets">BUY YOUR TICKET</CTA>
    </div>
  </div>
</template>

<script>
import Container from '~/components/Container'
import Logo from '~/components/Logo'
import RepeatingImage from "~/components/RepeatingImage";
import Hero1 from '~/assets/images/hero1.jpg'
import Hero1Mobile from '~/assets/images/hero1_mobile.jpg'
export default {
  name: 'Header',
  components: {RepeatingImage, Logo, Container },
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
.text-shadow {
  text-shadow: 0 4px 4px black;
}
.shadow-none {
  text-shadow: none;
}

  /*.header{*/
  /*  color: white;*/
  /*  position: relative;*/
  /*  !*height: 70vh;*!*/
  /*  width: 100%;*/
  /*  background-size: cover;*/
  /*  background-repeat: repeat-x;*/
  /*  background-position: center top;*/
  /*}*/
  .vertical-align-bottom{
    vertical-align: bottom;
  }
  .w-fit-content{
    width: fit-content;
  }
</style>
