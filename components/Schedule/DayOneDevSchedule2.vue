<template>
  <table class="table text-center">
    <tbody class="even:bg-red">
      <ScheduleRowRight time="1:35 - 2:00">
        <b>Fee-bumping for presigned transactions protocols</b><br><br>

        <nuxt-link to="/speaker/AntoinePoinsot">Antoine Poinsot</nuxt-link> - Founder Revault
      </ScheduleRowRight>

      <ScheduleRowRight time="2:05 - 2:30">
        <b>Transaction Relay Policy for L2 Developers</b> <br><br>

        <nuxt-link to="/speaker/GloriaZhao">Gloria Zhao</nuxt-link> - Brink Fellow, Bitcoin Core Contributor
      </ScheduleRowRight>

      <ScheduleRowRight time="2:35 - 3:00">
        <b>Solving the Dev Crunch</b> <br><br>

        <nuxt-link to="/speaker/PaulItoi">Paul Itoi</nuxt-link> - Co-Founder of Sphinx Chat
      </ScheduleRowRight>

      <ScheduleRowRight time="3:05 - 3:55">
        <b>The Future of Lightning Custody</b> <br><br>
        <nuxt-link to="/speaker/PierreMariePadiou">Pierre Marie Padiou</nuxt-link> - CEO of ACINQ <br>
        <nuxt-link to="/speaker/NicolasBurtey">Nicolas Burtey</nuxt-link> - CEO of Galoy <br>
        <nuxt-link to="/speaker/RoySheinfeld">Roy Sheinfeld</nuxt-link> - CEO of Breez <br>
        <nuxt-link to="/speaker/ConorOkus">Conor Okus</nuxt-link> - Product Manager at Square Crypto <br><br>
        Host:<nuxt-link to="/speaker/AaronVanWirdum">Aaron van Wirdum</nuxt-link> - Bitcoin Magazine
      </ScheduleRowRight>

      <ScheduleRowRight time="4:00 - 4:30" :fixedheight="true">
        Coffee Break
      </ScheduleRowRight>
    </tbody>
  </table>
</template>

<script>
import ScheduleRowRight from '~/components/Schedule/ScheduleRowRight'
export default {
  name: 'DayOneDevSchedule2',
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
