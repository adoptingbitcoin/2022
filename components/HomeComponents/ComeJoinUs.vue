<template>
  <div class="mx-auto">
    <div class="header">
      <Container class="title-container">
        <h5 class="text-2xl">{{ $t('comejoinus.title') }}</h5>
<!--        <CTA href="#tickets">GET YOUR TICKET NOW</CTA>-->
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
    height: 45vh;
    width: 100%;
    background-image: url("~/assets/images/bg-mountains.jpg");
    background-size: cover;
    background-position: center center;
  }
</style>
