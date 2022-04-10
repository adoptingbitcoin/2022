<template>
  <div class="speaker">
    <Header :speaker="speaker" />
    <Container class="my-2">
      <nuxt-content :document="speaker" />
    </Container>
    <Tickets id="tickets" />
    <SpeakerList :speakers="allSpeakers" />
    <ContactUs />
  </div>
</template>

<script>
import Header from '~/components/SpeakerComponents/Header'
import Container from '~/components/Container'
import SpeakerList from '~/components/HomeComponents/SpeakerList'
import ContactUs from '~/components/HomeComponents/ContactUs'
import Tickets from '~/components/HomeComponents/Tickets'
export default {
  components: { ContactUs, SpeakerList, Container, Header, Tickets },
  async asyncData ({ $content, params, i18n }) {
    const allSpeakers = await $content('speakers')
      .only(['name', 'function', 'img', 'slug', 'url', 'twitter', 'showPage'])
      .sortBy('prio', 'asc')
      .fetch()

    const speaker = await $content('speakers', params.slug)
      .fetch()

    return {
      allSpeakers,
      speaker
    }
  },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    const speakerName = this.speaker.name.replace(/<[^>]*>?/gm, '')
    const metaImage = 'https://' + process.env.domain + '/speaker-meta/' + this.speaker.img
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      title: this.$t('seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('seo.speakerDescription', { name: speakerName, company: this.speaker.function })
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('seo.keywords')
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: metaImage
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.$t('seo.title')
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://' + process.env.domain
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.$t('seo.speakerDescription', { name: speakerName, company: this.speaker.function })
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@AdoptingBTC'
        },
        ...i18nHead.meta
      ],
      link: [
        ...i18nHead.link
      ]
    }
  }
}
</script>

<style scoped>
</style>

<style lang="scss">
.speaker .nuxt-content {
  h1{
    @apply text-5xl text-blue pb-5 font-bold;
  }
  h2{
    @apply text-3xl text-blue;
  }
  a{
    @apply text-blue;
  }
  & > p:nth-of-type(1){
    @apply md:w-2/3;
  }
  img{
    max-width: 100%;
    height: auto;
    @apply md:w-2/3;
  }
}
</style>
