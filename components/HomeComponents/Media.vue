<template>
  <div class="">
    <BGGrey>
      <Container>
        <GradientHeader class="mb-10">
          {{ $t('media.title') }}
        </GradientHeader>
        <div v-if="media" class="grid grid-cols-2 md:grid-cols-4  grid-flow-row gap-1 items-start mb-4">
          <Sponsor v-for="(mediaOutlet, i) in media" :key="i" :index="i" :sponsor="mediaOutlet" class="p-8 md:p-16" />
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
      type: Object,
      default: () => { return { media: [] } }
    }
  }
}
</script>

<style scoped>
</style>
