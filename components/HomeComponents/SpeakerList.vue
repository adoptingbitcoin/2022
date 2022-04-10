<template>
  <div>
    <BGGrey class="pb-16">
      <Container>
        <GradientHeader class="mb-10">
          {{ $t('speakers.title') }}
        </GradientHeader>
        <div class="grid grid-cols-2 md:grid-cols-5  grid-flow-row gap-4">
          <Speaker v-for="(speaker, i) in speakers" :key="i" :index="i" :speaker="speaker" />
        </div>
      </Container>
    </BGGrey>
  </div>
</template>

<script>
import Speaker from '~/components/Speaker'
import GradientHeader from '~/components/GradientHeader'
import BGGrey from '~/components/BGGrey'
import Container from '~/components/Container'
import CTA from '~/components/CTA'
export default {
  name: 'SpeakerList',
  components: { Container, BGGrey, GradientHeader, Speaker },
  props: ['speakers']
}
</script>

<style scoped>
.cta-border-grey{
  background: darkgrey;
  height: fit-content;
  width: fit-content;
}
</style>
