<template>
  <div class="locations">
    <Container>
      <GradientHeader class="mb-5">
        {{ $t('locations.title') }}
      </GradientHeader>
      <div class="grid grid-cols-1 grid-flow-row gap-4">
        <Location v-for="(location, i) in locations" :key="i" :index="i" :location="location" />
      </div>
      <div class="my-5">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="">
            <PinkTitle>{{ $t('locations.directions') }}</PinkTitle>
            <span v-html="$t('locations.directionsText')" />
          </div>
          <div class="w-full h-full items-center justify-center flex">
            <a href="https://pretalx.com/adopting-bitcoin-2022/schedule" target="_blank">
              <CTA>
                Schedule
              </CTA>
            </a>
          </div>

        </div>
      </div>

      <div class="w-full my-10">
        <img class="box-img" src="~/assets/images/AB_miner.png" alt="">
      </div>
    </Container>
  </div>
</template>

<script>
import GradientHeader from '~/components/GradientHeader'
import Container from '~/components/Container'
import Location from '~/components/Location'
export default {
  name: 'Locations',
  components: { Location, Container, GradientHeader },
  props: [
    'locations'
  ]
}
</script>

<style scoped>

.box-img {
  max-width: 300px;
  @apply my-14 mx-auto;
}

.locations {
  background-image: url("~/assets/images/bg-leftRainbow.jpg");
  background-size: contain;
  background-position: right;
  background-repeat: repeat-y;
}

</style>
