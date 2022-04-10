<template>
  <Container class="mt-12">
    <GradientHeader>Day 1 Schedule</GradientHeader>
    <DayOneSchedule />
  </Container>
</template>

<script>
import DayOneSchedule from '~/components/Schedule/DayOneSchedule'
import Container from '~/components/Container'
import GradientHeader from '~/components/GradientHeader'
export default {
  name: 'ConventionSchedule',
  components: { GradientHeader, Container, DayOneSchedule }
}
</script>

<style scoped>

</style>
