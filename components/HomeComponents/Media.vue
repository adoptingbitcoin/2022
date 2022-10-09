<template>
  <div class="">
    <BGGrey>
      <Container>
        <GradientHeader class="mb-10">
          {{ $t('media.title') }}
        </GradientHeader>
        <div v-if="media" class="grid grid-cols-4 md:grid-cols-5  grid-flow-row gap-1 items-center mb-4">
          <Sponsor v-for="(mediaOutlet, i) in media" :key="i" :index="i" :sponsor="mediaOutlet" class="" />
        </div>
      </Container>
    </BGGrey>
  </div>
</template>

<script>
import BGGrey from '~/components/BGGrey'
import Container from '~/components/Container'
import GradientHeader from '~/components/GradientHeader'
import Sponsor from '~/components/Sponsor'
export default {
  name: 'Media',
  components: { Sponsor, GradientHeader, Container, BGGrey },
  props: {
    media: {
      type: Array,
      default: () => { return { media: [] } }
    }
  }
}
</script>

<style scoped>
</style>
