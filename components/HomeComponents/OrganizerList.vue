<template>
  <div class="pb-16 bg">
    <Container>
      <div class="border-darkblue border-4 rounded p-5 bg-white">
        <GradientHeader class="mb-10">
          {{ $t('organizers.title') }}
        </GradientHeader>
        <div class="grid grid-cols-2 md:grid-cols-4  grid-flow-row gap-4">
          <Organizer v-for="(speaker, i) in organizers" :key="i" :index="i" :speaker="speaker" :speaker-href="speaker.social"/>
        </div>


        <GradientHeader class="my-10">
          {{ $t('organizers.advisorsTitle') }}
        </GradientHeader>
        <div class="grid grid-cols-2 md:grid-cols-4  grid-flow-row gap-4">
          <Organizer v-for="(speaker, i) in advisors" :key="i" :index="i" :speaker="speaker" :speaker-href="speaker.social"/>
        </div>
      </div>

    </Container>
  </div>
</template>

<script>
import Organizer from '~/components/Organizer'
import GradientHeader from '~/components/GradientHeader'
import BGGrey from '~/components/BGGrey'
import Container from '~/components/Container'
export default {
  name: 'OrganizerList',
  components: { Container, BGGrey, GradientHeader, Organizer },
  props: ['organizers', 'advisors']
}
</script>

<style scoped>

.bg {
  background-image: url("~/assets/images/bg-pink.jpg");
  background-repeat: repeat-y;
  background-position: bottom right;
  background-size: contain;
}
</style>
