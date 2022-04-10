<template>
  <table class="table text-center">
    <tbody class="even:bg-gray-300">
      <ScheduleRow time="4:35 - 5:00">
        <b>Self-Custody Solutions for Salvadoran Companies</b> <br><br>

        <nuxt-link to="/speaker/MoritzWietersheim">Moritz Wietersheim</nuxt-link> - Founder of Specter Solutions <br><br>
        (Spanish)
      </ScheduleRow>

      <ScheduleRow time="5:05 - 5:30">
        <b>Taking local commerce off-the-chain</b> <br><br>

        <nuxt-link to="/speaker/MichaelAtwood">Michael Atwood</nuxt-link> - Founder of Oshi
      </ScheduleRow>

      <ScheduleRow time="5:35 - 6:15">
        <b>Bitcoin for Institutions</b> <br><br>

        <nuxt-link to="/speaker/AlexanderLeishman">Alexander Leishman</nuxt-link> - River <br>
        Host: <nuxt-link to="/speaker/ChrisHunter">Chris Hunter</nuxt-link> - Galoy <br> <br>
      </ScheduleRow>

      <ScheduleRow time="6:15 - 6:30" :fixedheight="true">
        Closing Remarks: Moritz Wietersheim
      </ScheduleRow>
    </tbody>
  </table>
</template>

<script>
import ScheduleRow from '~/components/Schedule/ScheduleRow'
export default {
  name: 'DayOneEconSchedule3',
  components: { ScheduleRow }
}
</script>

<style scoped>

</style>
