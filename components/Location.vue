<template>
  <div class="my-5">
    <div class="grid grid-cols-2 gap-5">
      <img :src="computedImg">
      <div class="">
        <BlueTitle v-html="location.name"></BlueTitle>
        <p>
          {{ location.description }}
        </p>
      </div>
    </div>


  </div>
</template>

<script>
import BlueTitle from '~/components/BlueTitle'
export default {
  name: 'Location',
  components: { BlueTitle },
  props: [
    'location'
  ],
  computed: {
    computedImg () {
      if (this.location.img) {
        return require('~/assets/images/location/' + this.location.img)
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

img{
  height: auto;
  width: 100%;
}
</style>
