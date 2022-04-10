<template>
  <BGColor class="">
    <Container class="text-white">
      <h2 class="text-4xl font-bold text-white">
        {{ $t('contactus.title') }}
      </h2>
      <div class="my-10 mx-auto grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4">
        <div class="my-5">
          <h5 class="font-bold text-2xl">
            Adopting Bitcoin
          </h5>
          <p>
            Sheraton Presidente <br>
            Ave. La Revolucion, <br>
            San Salvador, El Salvador
          </p>
        </div>
        <div class="my-5">
          <h5 class="font-bold text-2xl">
            Email
          </h5>
          <a href="mailto:adoptingbitcoin@galoy.io">
            adoptingbitcoin@galoy.io
          </a>
        </div>
        <div class="my-5">
          <h5 class="font-bold text-2xl">
            Social
          </h5>
          <p>
            <a href="https://twitter.com/AdoptingBTC" target="_blank">
              <span class="svg-icon svg-baseline">
                <!--eslint-disable-next-line-->
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path></svg>
              </span>
              @AdoptingBTC
            </a>
          </p>
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
    </Container>
  </BGColor>
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
