<template>
  <table class="table text-center">
    <tbody class="even:bg-red">
      <ScheduleRowRight time="4:15 - 4:40">
        <b>Building a Bitcoin Bank</b><br><br>
        <nuxt-link to="/speaker/JustinCarter">Justin Carter</nuxt-link> (Galoy)
      </ScheduleRowRight>

      <ScheduleRowRight time="4:45 - 5:10">
        <b>Improving Bitcoin Privacy with Federated E-Cash Mints</b><br><br>

        <nuxt-link to="/speaker/Elsirion">elsirion</nuxt-link> - Blockstream
      </ScheduleRowRight>

      <ScheduleRowRight time="5:15 - 6:10">
        <b>Onboarding Bitcoin and Lightning Developers</b><br><br>

        <nuxt-link to="/speaker/WillClark">Will Clark</nuxt-link> - Lightning Application Engineer at Global Mesh Labs <br>
        <nuxt-link to="/speaker/GloriaZhao">Gloria Zhao</nuxt-link> - Brink Fellow, Bitcoin Core Contributor <br>
        <nuxt-link to="/speaker/Josie">Josie</nuxt-link> - Bitcoin Core Contributor <br>
        <nuxt-link to="/speaker/JonasNick">Jonas Nick</nuxt-link> - Bitcoin Research Blockstream <br><br>

        Host: <nuxt-link to="/speaker/PabloFernandez">Pablo Fernandez</nuxt-link>
      </ScheduleRowRight>

      <ScheduleRowRight time="6:15 - 6:25" :fixedheight="true">
        Closing Remarks: Nicolas Burtey
      </ScheduleRowRight>
    </tbody>
  </table>
</template>

<script>
import ScheduleRowRight from '~/components/Schedule/ScheduleRowRight'
export default {
  name: 'DayTwoDevSchedule3',
  components: { ScheduleRowRight }
}
</script>

<style scoped>

</style>
