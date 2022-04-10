<template>
  <div class="p-3">
    <a :href="sponsor.url" target="_blank">
      <div class="image-border rounded-full">
        <img :src="computedImg" alt="" class="rounded-full p-1 w-full h-auto object-cover">
      </div>
      <!-- eslint-disable vue/no-v-html -->
      <p class="text-xs italic text-center my-2 mx-auto" v-html="sponsor.title" />
      <!-- eslint-enable -->
    </a>
  </div>
</template>

<script>
export default {
  name: 'Sponsor',
  props: {
    sponsor: {
      type: Object,
      default: () => { return {} }
    }
  },
  computed: {
    computedImg () {
      if (this.sponsor.img) {
        return require('~/assets/images/sponsor/' + this.sponsor.img)
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

.image-border{
  background: linear-gradient(to right, #ffcc00, #e60000);
  width: fit-content;
  height: fit-content;
  margin: auto;
}
img{
  max-height: 100%;
  max-width: 100%;
}
</style>
