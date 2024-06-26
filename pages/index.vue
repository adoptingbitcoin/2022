<template>
  <div class="w-full">
    <Nav class="navIsHidden" :class="{ 'navIsVisible': navIsVisible, 'hidden': hideNav }" />
    <Header id="home" v-view="headerScrollHandler" />
    <JoinTheNetwork />
    <ComeJoinUs />
    <Locations id="location" :locations="locations" />
    <div class="bg-rainbow-right bg-contain bg-left">
<!--      <LastYearSpeakerList :speakers="lastyearspeakers" />-->
      <SpeakerList id="speakers" :speakers="speakers" />
<!--      <SpeakerSignup />-->
      <SponsorSignup />
    </div>
    <!-- <Schedule /> -->
    <Tickets id="tickets" />
     <Sponsors id="sponsors" :sponsors="sponsors" />
    <Media id="media" :media="media" />
    <OrganizerList id="organizers" :organizers="organizers" :advisors="advisors" />
    <!-- Get in touch -->
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
import Media from '~/components/HomeComponents/Media'
import Nav from '~/components/Nav'
import SpeakerSignup from '~/components/HomeComponents/SpeakerSignup'
import LastYearSpeakerList from '~/components/HomeComponents/LastYearSpeakerList'
import SponsorSignup from "~/components/HomeComponents/SponsorSignup";
export default {
  components: {
    SponsorSignup,
    LastYearSpeakerList,
    SpeakerSignup,
    Nav,
    Sponsors,
    Media,
    Tickets,
    OrganizerList,
    ContactUs,
    Subscribe,
    Locations,
    Schedule,
    ComeJoinUs,
    SpeakerList,
    JoinTheNetwork,
    Header
  },
  async asyncData ({ $content, params, i18n }) {
    const speakers = await $content('speakers', params.slug)
      .only(['name', 'function', 'img', 'slug', 'showPage', 'twitter', 'url'])
      .sortBy('prio', 'asc')
      .fetch()

    const lastyearspeakers = await $content('lastyearsspeakers', params.slug)
      .only(['name', 'function', 'img', 'slug', 'showPage', 'twitter', 'url'])
      .sortBy('prio', 'asc')
      .fetch()

    const organizers = await $content('organizers', params.slug)
      .only(['name', 'function', 'social', 'img', 'slug'])
      .sortBy('prio', 'asc')
      .fetch()

    const advisors = await $content('advisors', params.slug)
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

    const media = await $content('media', params.slug)
      .only(['img', 'slug', 'title', 'url'])
      .sortBy('prio', 'desc')
      .fetch()

    return {
      speakers,
      organizers,
      advisors,
      locations,
      sponsors,
      lastyearspeakers,
      media
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
