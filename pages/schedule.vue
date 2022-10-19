<template>
  <div class="w-full">
    <Nav class="navIsHidden z-50" :class="{ 'navIsVisible': navIsVisible }" />
    <div class="">
      <RepeatingImage
        :image="require('~/assets/images/hero1.jpg')"
        :mobile-image="require('~/assets/images/hero1_mobile.jpg')"
        :repeat-left="require('~/assets/images/hero1_left.jpg')"
        :repeat-right="require('~/assets/images/hero1_right.jpg')"
        v-view="headerScrollHandler"
      >

        <div class="w-fit-content text-shadow text-white">
          <h1 class="text-4xl md:text-8xl">
            {{ $t('header.title') }}
          </h1>
          <h5 class="text-lg md:text-4xl">
            {{ $t('header.subtitle') }}
          </h5>
          <div class="bg-white rounded my-5" style="height: 5px" />

          <h5 class="text-lg md:text-4xl">
            Schedule
          </h5>

        </div>

      </RepeatingImage>
      <div class="w-full absolute right-0 top-0 mt-3">
        <SlimContainer class="flex items-center justify-end">
          <Menu class="inline-block vertical-align-middle mr-3 z-50" />
        </SlimContainer>
      </div>

      <div class="overflow-x-scroll">
        <pretalx-schedule event-url="https://pretalx.com/adopting-bitcoin-2022/" locale="en" format="grid" style="--pretalx-clr-primary: #03736F"></pretalx-schedule>
        <noscript>
          <div class="pretalx-widget">
            <div class="pretalx-widget-info-message">
              JavaScript is disabled in your browser. To access our schedule without JavaScript,
              please <a target="_blank" href="https://pretalx.com/adopting-bitcoin-2022/schedule/">click here</a>.
            </div>
          </div>
        </noscript>
      </div>

    </div>
    <ContactUs />
  </div>
</template>

<script>
import Container from '~/components/Container'
import ContactUs from '~/components/HomeComponents/ContactUs'
import RepeatingImage from '~/components/RepeatingImage';
import SlimContainer from "~/components/SlimContainer";
export default {
  components: {SlimContainer, RepeatingImage, ContactUs, Container },
  data () {
    return {
      navIsVisible: {
        type: Boolean,
        default: false
      }
    }
  },
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      title: 'Speaker Signup - ' + this.$t('seo.title'),
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
        ...i18nHead.link,
      ],
      script: [
        {
          src: 'https://pretalx.com/adopting-bitcoin-2022/schedule/widget/v2.en.js'
        }
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
.navIsHidden {
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease;
}
.navIsVisible {
  visibility: visible;
  opacity: 1!important;
  transition: opacity 0.5s ease;
}
</style>
