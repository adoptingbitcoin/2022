<template>
  <div class="fixed top-0 left-0 w-100 nav-bar z-50 text-white">
    <div class="w-100-vw pt-1 md:pt-3">
      <div class="background" :class="{ 'scrolled': !view.atTopOfPage }" />
      <SlimContainer class="relative">
      <NuxtLink to="/">
        <div class="inline-block mr-4">
          <Logo class="p-2 logo" />
        </div>
        <div class="md:inline-block vertical-align-bottom hidden">
          <h1 class="text-xl md:text-4xl text-shadow">
            {{ $t('header.title') }}
          </h1>
          <h5 class="md:text-2xl text-shadow">
            {{ $t('header.subtitle') }}
          </h5>
        </div>
      </NuxtLink>

      <div class="h-full absolute right-0 top-0 flex items-center justify-center mr-3">
<!--        <div class="mr-5">-->
<!--          <nuxt-link :to="switchLocalePath('en')" v-if="showLocale('en')">-->
<!--            English-->
<!--          </nuxt-link>-->
<!--          <nuxt-link :to="switchLocalePath('es')" v-if="showLocale('es')">-->
<!--            Español-->
<!--          </nuxt-link>-->
<!--        </div>-->
        <Menu class="inline-block vertical-align-middle"/>

      </div>
      </SlimContainer>
    </div>
    <div :class="{ 'opacity-0': view.atTopOfPage }" class="bg-gradient-to-r from-pink to-blue rounded mt-2 md:mt-5 w-100" style="height: 5px" />
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import Menu from '~/components/Menu'
import SlimContainer from "~/components/SlimContainer";
export default {
  name: 'Nav',
  components: {
    SlimContainer,
    Menu,
    Logo
  },
  data () {
    return {
      view: {
        atTopOfPage: true
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted () {
    this.handleScroll()
  },
  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll () {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0 && this.view.atTopOfPage) {
        this.view.atTopOfPage = false
      } else if (window.pageYOffset === 0 && !this.view.atTopOfPage) {
        this.view.atTopOfPage = true
      }
    },
    showLocale (locale) {
      return this.$i18n.locale !== locale
    }
  }
}
</script>

<style scoped>

.background{
  opacity: 0;
  width: 100%;
  height: 100%;
  background-image: url("~/assets/images/sticky_header.png");
  background-size: cover;
  background-position: top center;
  -webkit-transition: background-image 0.2s ease-in-out;
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -9999;
}
.text-shadow {
  text-shadow: 0 4px 4px black;
}
.background.scrolled{
  opacity: 1;
}
img.logo{
  height: 100px!important;
  width: auto!important;
}
@media (max-width: 768px){
  .background {
    background-image: url("~/assets/images/sticky_header_mobile.png");
  }
  img.logo{
    height: 75px!important;
  }
}
.vertical-align-bottom{
  vertical-align: bottom;
}
.vertical-align-middle{
  vertical-align: middle;
}
</style>
