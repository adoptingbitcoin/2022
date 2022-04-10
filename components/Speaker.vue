<template>
  <div class="p-3">
    <NuxtLink :to="computedSpeakerLink" v-if="!isExternalLink">
      <div class="image-border bg-red-400 rounded-full">
        <img :src="computedImg" alt="" class="rounded-full object-cover p-1" />
      </div>
      <h2 class="text-lg font-semibold my-2 text-center" v-html="speaker.name"></h2>
      <p class="text-xs italic text-center mx-auto" v-html="speaker.function" />
    </NuxtLink>
    <a :href="computedSpeakerLink" target="_blank" v-if="isExternalLink">
      <div class="image-border bg-red-400 rounded-full">
        <img :src="computedImg" alt="" class="rounded-full object-cover p-1" />
      </div>
      <h2 class="text-lg font-semibold my-2 text-center" v-html="speaker.name"></h2>
      <p class="text-xs italic text-center mx-auto" v-html="speaker.function" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Speaker',
  props: {
    speaker: Object
  },
  computed: {
    computedImg () {
      if (this.speaker.img) {
        return require('~/assets/images/person/' + this.speaker.img)
      } else {
        return null
      }
    },
    computedSpeakerLink () {
      if (this.speaker.url) {
        return this.speaker.url
      }
      if (this.speaker.showPage) {
        return '/speaker/' + this.speaker.slug
      }
      if (this.speaker.twitter) {
        return 'https://twitter.com/' + this.speaker.twitter
      }
      return ''
    },
    isExternalLink () {
      if (this.speaker.showPage) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style scoped>
h2{
  line-height: 100%;
}
article{
  filter: none;
}
.image-border{
  background: linear-gradient(to right, #ffcc00, #e60000);
  width: fit-content;
  height: fit-content;
  margin: auto;
}
img{
  max-height: 250px;
}
</style>
