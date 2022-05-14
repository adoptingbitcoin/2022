<template>
  <div class="mx-auto">
    <div class="header">
      <RepeatingImage
        :image="require('~/assets/images/hero2.jpg')"
        :repeat-left="require('~/assets/images/hero2_left.jpg')"
        :repeat-right="require('~/assets/images/hero2_right.jpg')"
      >
        <h5 class="text-4xl md:text-8xl" v-html="$t('comejoinus.title')" />
      </RepeatingImage>
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
  .header{
    color: white;
    position: relative;
    width: 100%;
    background-size: contain;
    background-position: center center;
  }
</style>
