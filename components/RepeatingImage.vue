<template>
  <div class="relative">

    <div class="">
      <Container class="py-0 hidden md:block">
        <img class="" :src="''+image" >
      </Container>
      <img class="md:hidden" :src="computedMobileImage" >
      <div class="hidden md:block cover-image" :style="{ 'background-image': 'url(' + image + ')' }" />
      <div class="md:hidden cover-image" :style="{ 'background-image': 'url(' + mobileImage + ')' }" />
      <div class="hidden md:block bg-left side-image" :style="{ 'background-image': 'url(' + repeatLeft + ')' }" />
      <div class="hidden md:block bg-right side-image" :style="{ 'background-image': 'url(' + repeatRight + ')' }" />
    </div>

    <Container class="title-container py-2">
      <div class="px-5">
        <slot />
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/Container'
export default {
  name: 'RepeatingImage',
  components: { Container },
  props: {
    image: String,
    mobileImage: String,
    repeatLeft: String,
    repeatRight: String
  },
  computed: {
    computedMobileImage () {
      if (this.mobileImage) {
        return this.mobileImage
      } else {
        return this.image
      }
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

.cover-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
}

.side-image {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  background-size: contain;
  background-repeat: repeat-x;
}

.bg-left {
  left: 0;
}
.bg-right {
  right: 0;
}
</style>
