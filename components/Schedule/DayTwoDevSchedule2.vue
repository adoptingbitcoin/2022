<template>
  <table class="table text-center">
    <tbody class="even:bg-red">
      <ScheduleRowRight time="1:35 - 2:00">
        <b>Liquid Q&A</b><br><br>
        Samson Mow - CSO Blockstream
      </ScheduleRowRight>

      <ScheduleRowRight time="2:05 - 2:30">
        <b>DLCs and Lightning</b><br><br>
        <nuxt-link to="/speaker/ChrisStewart">Chris Stewart</nuxt-link> - Founder Suredbits
      </ScheduleRowRight>

      <ScheduleRowRight time="2:35 - 3:00">
        <b>Running a big Lightning node: challenges, findings and next steps</b><br><br>
        <nuxt-link to="/speaker/VictorAfanassieff">Victor Afanassieff</nuxt-link> and <nuxt-link to="/speaker/RomainRouphael">Romain Rouphael</nuxt-link> from LN Markets
      </ScheduleRowRight>

      <ScheduleRowRight time="3:05 - 3:45">
        <b>Lightning Privacy</b><br><br>

        <nuxt-link to="/speaker/AdamFicsor">Adam Ficsor</nuxt-link>  - Wasabi Wallet <br>
        <nuxt-link to="/speaker/PeterTodd">Peter Todd</nuxt-link> - Bitcoin Core Developer <br>
        <nuxt-link to="/speaker/BastienTeinturier">Bastien Teinturier</nuxt-link> - Software Developer ACINQ <br>
        <nuxt-link to="/speaker/Openoms">Openoms</nuxt-link> (Raspiblitz) <br><br>

        Host: Stephan Livera - Host of the Bitcoin Podcast
      </ScheduleRowRight>

      <ScheduleRowRight time="3:50 - 4:10" :fixedheight="true">
        Coffee Break
      </ScheduleRowRight>
    </tbody>
  </table>
</template>

<script>
import ScheduleRowRight from '~/components/Schedule/ScheduleRowRight'
export default {
  name: 'DayTwoDevSchedule2',
  components: { ScheduleRowRight }
}
</script>

<style scoped>
</style>
