<template>
  <div class="mx-auto">
    <div class="header">
      <RepeatingImage :image="require('~/assets/images/hero2.jpg')" :repeat-left="require('~/assets/images/hero2_left.jpg')" :repeat-right="require('~/assets/images/hero2_right.jpg')" />
      <Container class="title-container">
        <h5 class="text-4xl md:text-8xl">{{ $t('comejoinus.title') }}</h5>
      </Container>
    </div>
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
    width: 100%;
    background-size: contain;
    background-position: center center;
  }
</style>
