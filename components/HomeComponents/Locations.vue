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

      <div class="flex justify-between">
        <div class="">
          <BlueTitle>{{ $t('locations.directions') }}</BlueTitle>
          <span>{{ $t('locations.directionsText') }}</span>
        </div>
        <CTA href="#tickets">BUY YOUR TICKET</CTA>
      </div>
    </div>

    <div class="w-full">
      <img class="box-img" src="~/assets/images/box.png" alt="">
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
