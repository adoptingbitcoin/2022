<template>
  <div class="relative">

    <div class="">
      <Container class="py-0">
        <img src="~/assets/images/hero1.jpg">
      </Container>
      <div class="cover-image" :style="{ 'background-image': 'url(' + image + ')' }" />
      <div class="bg-left side-image" :style="{ 'background-image': 'url(' + repeatLeft + ')' }" />
      <div class="bg-right side-image" :style="{ 'background-image': 'url(' + repeatRight + ')' }" />
    </div>

    <Container class="title-container px-5">
      <slot />
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
    repeatLeft: String,
    repeatRight: String,
    textAlignBottom: Boolean
  },
  computed: {
    coverImageStyle () {
      return {
        'background-image': 'url("' + this.image + ' ")'
      }
    },
    leftImageStyle () {
      return {
        'background-image': 'url("' + this.repeatLeft + ' ")'
      }
    },
    rightImageStyle () {
      return {
        'background-image': 'url("' + this.computedImg(this.repeatRight) + ' ")'
      }
    },
    computedImg (path) {
      return require(path)
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
