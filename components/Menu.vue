<template>
  <div class="">
    <div class="trigger" @click="menuIsShown = true">
      <div class="line m-2" />
      <div class="line m-2" />
      <div class="line m-2" />
    </div>

    <div
      class="fixed right-0 top-0 w-100-vw h-100-vh bg-opacity-80 bg-white"
      :class="{ 'hidden': !menuIsShown }"
      style="z-index:999999999;"
    >
      <div class="absolute right-0 top-0 p-5 text-gray-700 text-5xl" :class="{ 'hidden': !menuIsShown }" @click="menuIsShown = false">
        <i class="fas fa-times" />
      </div>
      <div class="w-full h-full flex items-center justify-center">
        <div class="py-auto">
          <NuxtLink to="/#home" class="link" @click.native="menuIsShown=false">
            {{ $t('menu.home') }}
          </NuxtLink>
          <NuxtLink to="/#speakers" class="link" @click.native="menuIsShown=false">
            {{ $t('menu.speakers') }}
          </NuxtLink>
          <NuxtLink to="/#tickets" class="link" @click.native="menuIsShown=false">
            {{ $t('menu.tickets') }}
          </NuxtLink>
          <a href="https://pretalx.com/adopting-bitcoin-2022/schedule" class="link" target="_blank" @click.native="menuIsShown=false">
            {{ $t('menu.schedule') }}
          </a>
<!--          <NuxtLink to="/#sponsors" class="link" @click.native="menuIsShown=false">-->
<!--            {{ $t('menu.sponsors') }}-->
<!--          </NuxtLink>-->
          <NuxtLink to="/#location" class="link" @click.native="menuIsShown=false">
            {{ $t('menu.location') }}
          </NuxtLink>
          <NuxtLink to="/#organizers" class="link" @click.native="menuIsShown=false">
            {{ $t('menu.organizers') }}
          </NuxtLink>
          <NuxtLink to="/#news" class="link" @click.native="menuIsShown=false">
            {{ $t('menu.news') }}
          </NuxtLink>
<!--          <NuxtLink to="/faq" class="link" @click.native="menuIsShown=false">-->
<!--            {{ $t('menu.faq') }}-->
<!--          </NuxtLink>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      menuIsShown: false
    }
  }
}
</script>

<style scoped>
.line{
  height: 3px;
  width: 50px;
  background-color: #303549;
}

.link{
  @apply text-center font-bold block p-2 md:p-4 text-gray-700 text-3xl md:text-2xl;
}
</style>
