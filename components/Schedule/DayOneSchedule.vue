<template>
  <div class="my-12">
    <div class="hidden md:grid grid-cols-2 my-5 gap-0">
      <DayOneEconHeader class="mt-12" />
      <DayOneDevHeader class="mt-12" />

      <DayOneEconSchedule1 />
      <DayOneDevSchedule1 />

      <DayOneEconSchedule2 />
      <DayOneDevSchedule2 />

      <DayOneEconSchedule3 />
      <DayOneDevSchedule3 />
    </div>

    <div class="md:hidden grid grid-cols-1 my-5 gap-0">
      <DayOneEconHeader class="mt-12" />
      <DayOneEconSchedule1 />
      <DayOneEconSchedule2 />
      <DayOneEconSchedule3 />

      <DayOneDevHeader class="mt-12" />
      <DayOneDevSchedule1 />
      <DayOneDevSchedule2 />
      <DayOneDevSchedule3 />
    </div>
  </div>
</template>

<script>
import DayOneDevHeader from '~/components/Schedule/DayOneDevHeader'
import DayOneEconHeader from '~/components/Schedule/DayOneEconHeader'
import DayOneEconSchedule1 from '~/components/Schedule/DayOneEconSchedule1'
import DayOneDevSchedule1 from '~/components/Schedule/DayOneDevSchedule1'
import DayOneEconSchedule2 from '~/components/Schedule/DayOneEconSchedule2'
import DayOneDevSchedule2 from '~/components/Schedule/DayOneDevSchedule2'
import DayOneEconSchedule3 from '~/components/Schedule/DayOneEconSchedule3'
import DayOneDevSchedule3 from '~/components/Schedule/DayOneDevSchedule3'
export default {
  name: 'DayOneSchedule',
  components: { DayOneDevSchedule3, DayOneEconSchedule3, DayOneDevSchedule2, DayOneEconSchedule2, DayOneDevSchedule1, DayOneEconSchedule1, DayOneEconHeader, DayOneDevHeader }
}
</script>

<style scoped>

</style>
