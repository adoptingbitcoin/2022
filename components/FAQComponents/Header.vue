<template>
  <div class="header">
    <Nav />
    <div class="absolute bottom-0 left-0 w-full">
      <Container>
        <h1 class="text-white text-3xl md:text-5xl">
          {{ $t('faq.title') }}
        </h1>
      </Container>
    </div>
  </div>
</template>

<script>
import Nav from '~/components/Nav'
import Container from '~/components/Container'
export default {
  name: 'Header',
  components: { Container, Nav }
}
</script>

<style scoped>
.header{
  color: white;
  position: relative;
  height: 70vh;
  width: 100%;
  background-image: url("~/assets/images/adopting_bitcoin_the_lightning_network.jpg");
  background-size: cover;
  background-position: top center;
}
.title-container{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}
</style>
