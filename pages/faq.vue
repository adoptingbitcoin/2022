<template>
  <div class="w-full">
    <Nav />
    <div class="relative" >
      <RepeatingImage
        :image="require('~/assets/images/hero1.jpg')"
        :repeat-left="require('~/assets/images/hero1_left.jpg')"
        :repeat-right="require('~/assets/images/hero1_right.jpg')"
        v-view="headerScrollHandler"
      >
        <div class="w-fit-content text-shadow text-white">
          <h1 class="text-4xl md:text-8xl">
            {{ $t('header.title') }}
          </h1>
          <h5 class="text-lg md:text-6xl">
            FAQ
          </h5>
        </div>
      </RepeatingImage>
    </div>
    <Container>
      <div v-for="item in faq" :key="item.slug" class="">
        <div class="mb-14">
          <GradientHeader class="my-3">
            {{ item.title }}
          </GradientHeader>
          <FAQList :faq-list="item.faq" />
        </div>
      </div>
    </Container>
    <ContactUs />
  </div>
</template>

<script>
import FAQList from '~/components/FAQComponents/FAQList'
import Container from '~/components/Container'
import ContactUs from '~/components/HomeComponents/ContactUs'
import RepeatingImage from '~/components/RepeatingImage'
import SlimContainer from '~/components/SlimContainer'
import GradientHeader from "~/components/GradientHeader";
export default {
  components: {GradientHeader, SlimContainer, RepeatingImage, ContactUs, Container, FAQList },
  async asyncData ({ $content, params, i18n }) {
    const faq = await $content('faq', params.slug)
      .where({ language: i18n.locale })
      .fetch()
    return {
      faq
    }
  },
  data () {
    return {
      navIsVisible: {
        type: Boolean,
        default: false
      },
      hideNav: {
        type: Boolean,
        default: true
      }
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
  },
  methods: {
    headerScrollHandler (e) {
      if (this.navIsVisible && e.type === 'enter') {
        this.navIsVisible = false
      } else if (!this.navIsVisible && e.type === 'exit') {
        this.navIsVisible = true
      }
    }
  }
}
</script>

<style scoped>
</style>
