<template>
  <table class="table text-center">
    <tbody class="even:bg-red">
      <ScheduleRowRight time="7:30- 09:00" :fixedheight="true">
        Registration + coffee & snacks
      </ScheduleRowRight>

      <ScheduleRowRight time="09:00 - 09:10" :fixedheight="true">
        Opening Remarks: <nuxt-link to="/speaker/NicolasBurtey">Nicolas Burtey</nuxt-link>
      </ScheduleRowRight>

      <ScheduleRowRight time="09:15 - 09:40">
        <b>Introduction to Chaincode's Lightning Protocol Development</b> <br><br>
        <nuxt-link to="/speaker/Josie">Josie</nuxt-link> - Bitcoin Core Contributor
      </ScheduleRowRight>

      <ScheduleRowRight time="09:45 - 10:10">
        <b>Peer Infrastructure Improvement</b> <br><br>

        <nuxt-link to="/speaker/WarrenTogami">Warren Togami</nuxt-link> - Blockstream <br>
        <nuxt-link to="/speaker/KonstantinNick">Konstantin Nick</nuxt-link> - Donnerlabs
      </ScheduleRowRight>

      <ScheduleRowRight time="10:15 - 10:40">
        <b>Onboarding a Country to Lightning -
          A Cloud Architecture Approach</b> <br><br>

        <nuxt-link to="/speaker/RafaelCordon">Rafael Cordón</nuxt-link> - CTO IBEX
      </ScheduleRowRight>

      <ScheduleRowRight time="10:45 - 11:10">
        <b>Improving the developer experience with BDK & LDK</b> <br><br>
        <nuxt-link to="/speaker/ConorOkus">Conor Okus</nuxt-link> - Product Manager Square Crypto
      </ScheduleRowRight>

      <ScheduleRowRight time="11:15 - 11:40">
        <b>Where do you fit in the Lightning Network?</b> <br><br>

        <nuxt-link to="/speaker/Jesse">Jesse Jestopher</nuxt-link> - Co-Founder Amboss Technologies
      </ScheduleRowRight>

      <ScheduleRowRight time="11:45 - 1:30" :fixedheight="true">
        Lunch break
      </ScheduleRowRight>
    </tbody>
  </table>
</template>

<script>
import ScheduleRowRight from '~/components/Schedule/ScheduleRowRight'
export default {
  name: 'DayOneDevSchedule1',
  components: { ScheduleRowRight }
}
</script>

<style>
  tbody tr:nth-child(odd) {
    @apply bg-gray-300;
  }
  tbody tr:nth-child(even) {
    @apply bg-white;
  }

</style>
