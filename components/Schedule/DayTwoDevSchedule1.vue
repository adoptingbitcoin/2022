<template>
  <table class="table text-center">
    <tbody class="even:bg-red">
      <ScheduleRowRight time="7:30- 09:00" :fixedheight="true">
        Registration + coffee & snacks
      </ScheduleRowRight>

      <ScheduleRowRight time="9:05 - 9:25" :fixedheight="true">
        <b>The perfect LN wallet: what we dream of, what we have now</b><br><br>
        <nuxt-link to="/speaker/GiacomoZucco">Giacomo Zucco</nuxt-link> / BHB Network
      </ScheduleRowRight>

      <ScheduleRowRight time="09:30 - 9:55">
        <b>Mass Adoption, But Decentralized</b><br><br>
        <nuxt-link to="/speaker/JonasNick">Jonas Nick</nuxt-link> - Bitcoin Research Blockstream
      </ScheduleRowRight>

      <ScheduleRowRight time="10:00 - 10:25">
        <b>Privacy on Lightning</b> <br><br>
        <nuxt-link to="/speaker/BastienTeinturier">Bastien Teinturier</nuxt-link> - Software Developer ACINQ
      </ScheduleRowRight>

      <ScheduleRowRight time="10:30 - 11:10">
        <b>Optimally Reliable & Cheap Payment Flows on the Lightning Network</b><br><br>
        <nuxt-link to="/speaker/RenePickhardt">Rene Pickhardt</nuxt-link> - Bitcoin & Lightning Network Developer & Educator <br>
        <nuxt-link to="/speaker/StefanRichter">Stefan Richter</nuxt-link> -  netpositive.money and host of the Honigdachs Podcast
      </ScheduleRowRight>

      <ScheduleRowRight time="11:15 - 12:00">
        <b>All About LNbits and Local Custodianship</b><br><br>
        <nuxt-link to="/speaker/BenArc">Ben Arc</nuxt-link> - Teacher LNBits
      </ScheduleRowRight>

      <ScheduleRowRight time="12:10 - 1:30" :fixedheight="true">
        Lunch break
      </ScheduleRowRight>
    </tbody>
  </table>
</template>

<script>
import ScheduleRowRight from '~/components/Schedule/ScheduleRowRight'
export default {
  name: 'DayTwoDevSchedule1',
  components: { ScheduleRowRight }
}
</script>

<style scoped>

</style>
