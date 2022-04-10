<template>
  <div class="p-3">
    <a :href="speakerHref" target="_blank">
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
  name: 'Organizer',
  props: {
    speaker: Object,
    speakerHref: String
  },
  computed: {
    computedImg () {
      if (this.speaker.img) {
        return require('~/assets/images/person/' + this.speaker.img)
      } else {
        return null
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
