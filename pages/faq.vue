<template>
  <div class="w-full">
    <Header id="home" />
    <Container>
      <div v-for="item in faq" :key="item.slug" class="">
        <div class="mb-14">
          <h3 class="text-2xl my-3">
            {{ item.title }}
          </h3>
          <FAQList :faq-list="item.faq" />
        </div>
      </div>
    </Container>
    <ContactUs />
  </div>
</template>

<script>
import Header from '~/components/FAQComponents/Header'
import FAQList from '~/components/FAQComponents/FAQList'
import Container from '~/components/Container'
import ContactUs from '~/components/HomeComponents/ContactUs'
export default {
  components: { ContactUs, Container, FAQList, Header },
  async asyncData ({ $content, params, i18n }) {
    const faq = await $content('faq', params.slug)
      .where({ language: i18n.locale })
      .fetch()
    return {
      faq
    }
  },
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
