<template>
  <div class="footer">
    <RepeatingImage
      :image="require('~/assets/images/hero_footer.jpg')"
      :repeat-left="require('~/assets/images/hero_footer_left.png')"
      :repeat-right="require('~/assets/images/hero_footer_right.png')"
    >
      <h2 class="text-4xl font-bold text-white">
        {{ $t('contactus.title') }}
      </h2>
      <div class="my-10 mx-auto grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4">
        <!-- <div class="my-5">
          <h5 class="font-bold text-2xl">
            Adopting Bitcoin
          </h5>
          <p>
            Sheraton Presidente <br>
            Ave. La Revolucion, <br>
            San Salvador, El Salvador
          </p>
        </div> -->
        <div class="my-5">
          <h5 class="font-bold text-2xl">
            Email
          </h5>
          <a href="mailto:adoptingbitcoin@galoy.io">
            info@adoptingbitcoin.org
          </a>
        </div>
      </div>
      <div class="py-16" />
      <div class="text-center md:text-left md:float-left my-5">
        <NuxtLink to="/faq">
          {{ $t('menu.faq') }}
        </NuxtLink>
        <!--        <NuxtLink to="/press-kit">-->
        <!--          {{ $t('menu.forpress') }}-->
        <!--        </NuxtLink> |-->
        <!--        <NuxtLink to="/sponsor-kit">-->
        <!--          {{ $t('menu.forsponsors') }}-->
        <!--        </NuxtLink>-->
      </div>
      <div class="text-center md:text-left md:float-right my-5">
        <a href="https://galoy.io/" target="_blank" class="galoy-holder"><span class="text-xs">hosted by</span> <img class="galoy-logo" src="~/assets/images/galoy-logo.png"></a>
      </div>
      <div class="py-8" />

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
