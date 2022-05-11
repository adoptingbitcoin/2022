<template>
  <div class="footer">
    <RepeatingImage
      :image="require('~/assets/images/hero_footer.jpg')"
      :repeat-left="require('~/assets/images/hero_footer_left.png')"
      :repeat-right="require('~/assets/images/hero_footer_right.png')"
      class="py-2"
    >
      <div class="mx-auto grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4 text-white my-5 md:my-0">
        <div class="">
          <h5 class="font-bold text-2xl md:text-8xl">
            Email
          </h5>
          <a href="mailto:adoptingbitcoin@galoy.io" class="md:text-3xl">
            info@adoptingbitcoin.org
          </a>
        </div>
      </div>

      <div class="flex justify-between md:my-5">
        <div class="text-center md:text-left text-white">
          <NuxtLink to="/faq">
            {{ $t('menu.faq') }}
          </NuxtLink>
        </div>
        <div class="text-center">
          <a href="https://galoy.io/" target="_blank" class="galoy-holder">
            <span class="text-white text-2xl">&#174;galoy.io </span>
          </a>
        </div>

      </div>

    </RepeatingImage>
  </div>
</template>

<script>
import BGColor from '~/components/BGColor'
import Container from '~/components/Container'
export default {
  name: 'ContactUs',
  components: { Container, BGColor }
}
</script>

<style scoped>

h5{
  font-family: "Ubuntu", sans-serif;
}

.contact-container{
  width: fit-content;
}
.svg-icon {
  display: inline-flex;
  align-self: center;
}
.svg-icon svg {
  height:1.5em;
  width:1.5em;
}
.svg-icon.svg-baseline svg {
  top: .125em;
  position: relative;
}
.galoy-logo{
  max-height: 70px;
  display: inline-block;
  padding-bottom: 1em;
}
.galoy-holder{
  padding-bottom: 25px;
}
</style>
