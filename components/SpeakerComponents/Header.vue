<template>
  <div class="header relative text-white">
    <RepeatingImage
      :image="require('~/assets/images/hero1.jpg')"
      :mobile-image="require('~/assets/images/hero1_mobile.jpg')"
      :repeat-left="require('~/assets/images/hero1_left.jpg')"
      :repeat-right="require('~/assets/images/hero1_right.jpg')"
    >
      <div class="spacer" />
      <div class="SpeakerInfo">
        <Container>
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="image-border bg-red-400 rounded-full p-0 m-0 mx-auto">
              <img :src="computedImg" alt="" class="rounded-full object-cover p-1">
            </div>
            <div class="my-2 md:my-5"/>
            <div class="mx-auto text-xl">
              <ul>
                <li v-if="speaker.twitter">
                  <a :href="'https://twitter.com/' + speaker.twitter" target="_blank"><i class="fab fa-twitter-square" /> {{ speaker.twitter }}</a>
                </li>
                <li v-if="speaker.github">
                  <a :href="'https://github.com/' + speaker.github" target="_blank"><i class="fab fa-github-square" /> {{ speaker.github }}</a>
                </li>
                <li v-if="speaker.linkedin">
                  <a :href="'https://linkedin.com/in/' + speaker.linkedin" target="_blank"><i class="fab fa-linkedin" /> {{ speaker.linkedin }}</a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </RepeatingImage>
    <SlimContainer class="flex items-center justify-end">
      <Nav />
    </SlimContainer>

  </div>
</template>

<script>
import Nav from '~/components/Nav'
import Container from '~/components/Container'
export default {
  name: 'Header',
  components: { Container, Nav },
  props: ['speaker'],
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
/*.header{*/
/*  color: white;*/
/*  position: relative;*/
/*  width: 100%;*/
/*  background-image: url("~/assets/images/hero1.jpg");*/
/*  background-size: cover;*/
/*  background-position: top center;*/
/*  min-height: fit-content;*/
/*}*/

.image-border{
  background: linear-gradient(to right, #ffcc00, #e60000);
  width: fit-content;
  height: fit-content;
}
img{
  max-height: 250px;
}
.spacer{
  height: 175px;
}
</style>
