<template>
  <div class="container mx-auto">
    <div class="header">
      <Container><Logo class=""/></Container>
      <Container class="title-container">
        <h5 class="text-2xl">{{ $t('comejoinus.title') }}</h5>
          <div class="bg-gradient-to-r from-yellow via-red to-red rounded my-5" style="height: 5px"></div>
        <h5 class="text-lg md:text-2xl">{{  $t('header.date') }}</h5>
<!--        <CTA href="#tickets">GET YOUR TICKET NOW</CTA>-->
        <p class="hidden md:block">
          {{ $t('comejoinus.text') }}
        </p>
      </Container>
    </div>
    <Container class="block md:hidden">
      <p>
        {{ $t('comejoinus.text') }}
      </p>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/Container'
export default {
  name: 'ComeJoinUs',
  components: { Container }
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
    height: 90vh;
    width: 100%;
    background-image: url("~/assets/images/adopting_bitcoin_el_zonte.jpg");
    background-size: cover;
    background-position: center center;
  }
</style>
