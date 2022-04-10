<template>
  <div class="w-full">
    <Nav class="navIsHidden" :class="{ 'navIsVisible': navIsVisible, 'hidden': hideNav }" />
    <Header id="home" v-view="headerScrollHandler" />
    <JoinTheNetwork />
    <SpeakerList id="speakers" :speakers="speakers" />
    <ComeJoinUs />
    <Schedule />
    <Tickets id="tickets" />
    <Sponsors id="sponsors" :sponsors="sponsors" />
    <Locations id="location" :locations="locations" />
    <OrganizerList :speakers="organizers" />
    <Subscribe id="news" />
    <ContactUs />
  </div>
</template>

<script>
import JoinTheNetwork from '~/components/HomeComponents/JoinTheNetwork'
import Header from '~/components/HomeComponents/Header'
import SpeakerList from '~/components/HomeComponents/SpeakerList'
import ComeJoinUs from '~/components/HomeComponents/ComeJoinUs'
import Schedule from '~/components/HomeComponents/Schedule'
import Locations from '~/components/HomeComponents/Locations'
import Subscribe from '~/components/HomeComponents/Subscribe'
import ContactUs from '~/components/HomeComponents/ContactUs'
import OrganizerList from '~/components/HomeComponents/OrganizerList'
import Tickets from '~/components/HomeComponents/Tickets'
import Sponsors from '~/components/HomeComponents/Sponsors'
import Nav from '~/components/Nav'
export default {
  components: { Nav, Sponsors, Tickets, OrganizerList, ContactUs, Subscribe, Locations, Schedule, ComeJoinUs, SpeakerList, JoinTheNetwork, Header },
  async asyncData ({ $content, params, i18n }) {
    const speakers = await $content('speakers', params.slug)
      .only(['name', 'function', 'img', 'slug', 'showPage', 'twitter', 'url'])
      .sortBy('prio', 'asc')
      .fetch()

    const organizers = await $content('organizers', params.slug)
      .only(['name', 'function', 'social', 'img', 'slug'])
      .sortBy('prio', 'asc')
      .fetch()

    const locations = await $content('locations', params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .where({ language: i18n.locale })
      .sortBy('prio', 'asc')
      .fetch()

    const sponsors = {}
    sponsors.dolphins = await $content('sponsors', params.slug)
      .only(['width', 'img', 'slug', 'title', 'url'])
      .where({ tier: 'dolphin' })
      .sortBy('prio', 'desc')
      .fetch()
    sponsors.sharks = await $content('sponsors', params.slug)
      .only(['width', 'img', 'slug', 'title', 'url'])
      .where({ tier: 'shark' })
      .sortBy('prio', 'desc')
      .fetch()
    sponsors.whales = await $content('sponsors', params.slug)
      .only(['width', 'img', 'slug', 'title', 'url'])
      .where({ tier: 'whale' })
      .sortBy('prio', 'desc')
      .fetch()

    return {
      speakers,
      organizers,
      locations,
      sponsors
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
      title: this.$t('seo.title'),
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
  mounted () {
    const app = this
    setTimeout(function () {
      app.hideNav = false
    }, 200)
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
