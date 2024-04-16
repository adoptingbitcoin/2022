<template>
  <div>
    <Container>
      <div class="border-darkblue border-4 rounded p-5 bg-white">
        <GradientHeader class="mb-10">
          {{ $t('lastyearsspeakers.title') }}
        </GradientHeader>
        <p class="my-5">
          Over 70 prolific speakers joined us last year! Many more will be making their way to El Salvador this year as
          well.
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4  grid-flow-row gap-4">
          <Speaker
            v-for="(speaker, i) in speakers"
            :key="i"
            :index="i"
            :speaker="speaker"
            url-override="https://2021.adoptingbitcoin.org/#speakers"/>
        </div>

      </div>
    </Container>
  </div>
</template>

<script>
import Speaker from '~/components/Speaker'
import GradientHeader from '~/components/GradientHeader'
import Container from '~/components/Container'

export default {
  name: 'LastYearSpeakerList',
  components: {Container, GradientHeader, Speaker},
  props: ['speakers']
}
</script>

<style scoped>

</style>
