<template>
  <div class="w-full">
    <Nav />
    <RepeatingImage
      :image="require('~/assets/images/hero1.jpg')"
      :repeat-left="require('~/assets/images/hero1_left.jpg')"
      :repeat-right="require('~/assets/images/hero1_right.jpg')"
    >
        <h1 class="text-3xl md:text-5xl text-white">
          Speaker Signup
        </h1>

    </RepeatingImage>
    <Container>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdQNuZUKnNT1qiDLC-2PtTGrG7gYkrlOJkuJ_p3BunwAFhF-Q/viewform?embedded=true"
        width="100%"
        height="1600px"
        class="mx-auto"
      >Loading…</iframe>
    </Container>
    <ContactUs />
  </div>
</template>

<script>
import Container from '~/components/Container'
import ContactUs from '~/components/HomeComponents/ContactUs'
import RepeatingImage from '~/components/RepeatingImage';
export default {
  components: { RepeatingImage, ContactUs, Container },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      title: 'FAQ - ' + this.$t('seo.title'),
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
