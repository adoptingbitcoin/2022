<template>
  <div class="w-full">
    <Header id="home" />
    <Container>
      <BlueTitle>
        {{ $t('press-kit.title') }}
      </BlueTitle>
      <!-- eslint-disable vue/no-v-html -->
      <p class="mb-5" v-html="$t('press-kit.text')" />
      <!-- eslint-enable -->
      <a
        href="/Adopting_Bitcoin_2021_PRESS_KIT.zip"
        target="_blank"
        class="border-blue border-2 rounded p-2 my-10 text-blue hover:bg-blue hover:text-white"
      >
        <i class="fas fa-download" /> {{ $t('press-kit.download-kit') }}
      </a>
    </Container>
    <ContactUs />
  </div>
</template>

<script>
import Header from '~/components/HomeComponents/Header'
import Container from '~/components/Container'
import ContactUs from '~/components/HomeComponents/ContactUs'
import BlueTitle from '~/components/BlueTitle'
export default {
  components: { BlueTitle, ContactUs, Container, Header },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      title: 'Press Kit - ' + this.$t('seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('seo.description')
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('seo.keywords')
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://' + process.env.domain + '/adopting_bitcoin_meta_preview_q.jpg'
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
          content: this.$t('seo.description')
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
