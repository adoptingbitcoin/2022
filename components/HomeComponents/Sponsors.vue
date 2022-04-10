<template>
  <div class="">
    <BGGrey>
      <Container>
        <GradientHeader class="mb-10">
          {{ $t('sponsors.title') }}
        </GradientHeader>
        <div v-if="sponsors.whales" class="grid grid-cols-2 md:grid-cols-2  grid-flow-row gap-1 items-start mb-4">
          <Sponsor v-for="(sponsor, i) in sponsors.whales" :key="i" :index="i" :sponsor="sponsor" class="p-8 md:p-16" />
        </div>
        <div v-if="sponsors.sharks" class="grid grid-cols-3 md:grid-cols-4  grid-flow-row gap-1 items-start mb-4">
          <Sponsor v-for="(sponsor, i) in sponsors.sharks" :key="i" :index="i" :sponsor="sponsor" class="" />
        </div>
        <div v-if="sponsors.dolphins" class="grid grid-cols-4 md:grid-cols-6  grid-flow-row gap-1 items-start">
          <Sponsor v-for="(sponsor, i) in sponsors.dolphins" :key="i" :index="i" :sponsor="sponsor" class="" />
        </div>
        <div class="mx-auto w-content cursor-pointer mx-2" @click="toggleSponsorSignup">
          <CTA>{{ $t('sponsors.callforsponsors') }}</CTA>
        </div>
      </Container>
    </BGGrey>
    <div v-if="showSponsorSignup" class="mx-auto">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScua1nBLTbhShvWH1d4LowWwawvdt4OokZ0BkumDosTvrFDrA/viewform?embedded=true"
        width="100%"
        height="600"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >Loading…</iframe>
    </div>
  </div>
</template>

<script>
import BGGrey from '~/components/BGGrey'
import Container from '~/components/Container'
import GradientHeader from '~/components/GradientHeader'
import Sponsor from '~/components/Sponsor'
import CTA from '~/components/CTA'
export default {
  name: 'Sponsors',
  components: { CTA, Sponsor, GradientHeader, Container, BGGrey },
  props: {
    sponsors: {
      type: Object,
      default: () => { return { dolphins: [], sharks: [], whales: [] } }
    }
  },
  data () {
    return {
      showSponsorSignup: Boolean(false)
    }
  },
  methods: {
    toggleSponsorSignup () {
      this.showSponsorSignup = !this.showSponsorSignup
    }
  }
}
</script>

<style scoped>
</style>
