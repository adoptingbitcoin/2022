<template>
  <Container>
    <GradientHeader class="mb-5">
      {{ $t('locations.title') }}
    </GradientHeader>
    <div class="grid grid-cols-1 md:grid-cols-2  grid-flow-row gap-4">
      <Location v-for="(location, i) in locations" :key="i" :index="i" :location="location" />
      <div class="my-5">
        <BlueTitle>{{ $t('locations.directions') }}</BlueTitle>
        <p>
          {{ $t('locations.directionsText') }}
        </p>
        <!--eslint-disable-next-line-->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.4433338908175!2d-89.2427321260638!3d13.691578045797794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63302f3458a3d1%3A0x7d58cee957bb821f!2sSheraton%20Presidente%20San%20Salvador%20Hotel!5e0!3m2!1sde!2sde!4v1630063773641!5m2!1sde!2sde" width="100%" height="350px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </Container>
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
</style>
