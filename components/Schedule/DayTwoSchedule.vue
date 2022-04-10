<template>
  <div class="my-12">
    <div class="hidden md:grid grid-cols-2 my-5 gap-0">
      <DayTwoEconHeader class="mt-12" />
      <DayTwoDevHeader class="mt-12" />

      <DayTwoEconSchedule1 />
      <DayTwoDevSchedule1 />

      <DayTwoEconSchedule2 />
      <DayTwoDevSchedule2 />

      <DayTwoEconSchedule3 />
      <DayTwoDevSchedule3 />
    </div>

    <div class="md:hidden grid grid-cols-1 my-5 gap-0">
      <DayTwoEconHeader class="mt-12" />
      <DayTwoEconSchedule1 />
      <DayTwoEconSchedule2 />
      <DayTwoEconSchedule3 />

      <DayTwoDevHeader class="mt-12" />
      <DayTwoDevSchedule1 />
      <DayTwoDevSchedule2 />
      <DayTwoDevSchedule3 />
    </div>
  </div>
</template>

<script>
import DayTwoDevHeader from '~/components/Schedule/DayTwoDevHeader'
import DayTwoEconHeader from '~/components/Schedule/DayTwoEconHeader'
import DayTwoEconSchedule1 from '~/components/Schedule/DayTwoEconSchedule1'
import DayTwoEconSchedule2 from '~/components/Schedule/DayTwoEconSchedule2'
import DayTwoEconSchedule3 from '~/components/Schedule/DayTwoEconSchedule3'
import DayTwoDevSchedule1 from '~/components/Schedule/DayTwoDevSchedule1'
import DayTwoDevSchedule2 from '~/components/Schedule/DayTwoDevSchedule2'
import DayTwoDevSchedule3 from '~/components/Schedule/DayTwoDevSchedule3'
export default {
  name: 'DayTwoSchedule',
  components: { DayTwoDevSchedule3, DayTwoDevSchedule2, DayTwoDevSchedule1, DayTwoEconSchedule3, DayTwoEconSchedule2, DayTwoEconSchedule1, DayTwoEconHeader, DayTwoDevHeader }
}
</script>

<style scoped>

</style>
