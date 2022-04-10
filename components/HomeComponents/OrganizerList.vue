<template>
  <BGGrey class="pb-16">
    <Container>
      <GradientHeader class="mb-10">
        {{ $t('organizers.title') }}
      </GradientHeader>
      <div class="grid grid-cols-2 md:grid-cols-6  grid-flow-row gap-4">
        <Organizer v-for="(speaker, i) in speakers" :key="i" :index="i" :speaker="speaker" :speaker-href="speaker.social"/>
      </div>
    </Container>
  </BGGrey>
</template>

<script>
import Organizer from '~/components/Organizer'
import GradientHeader from '~/components/GradientHeader'
import BGGrey from '~/components/BGGrey'
import Container from '~/components/Container'
export default {
  name: 'OrganizerList',
  components: { Container, BGGrey, GradientHeader, Organizer },
  props: ['speakers']
}
</script>

<style scoped>
</style>
