<template>
  <table class="table text-center">
    <tbody class="">
      <ScheduleRow time="4:15 - 4:40">
        <b>From El Salvador to Sénégal </b> - or how to accelerate Bitcoin and Lightning adoption in Africa<br><br>

        <nuxt-link to="/speaker/FodeDiop">Fode Diop</nuxt-link> - Bitcoin Application Developer at Global Mesh Labs
      </ScheduleRow>

      <ScheduleRow time="4:45 - 5:10">
        <b>Building for the Remnant</b><br><br>

        <nuxt-link to="/speaker/AleksSvetski">Aleks Svetski</nuxt-link> - Co Founder at Amber, Writer, Speaker
      </ScheduleRow>

      <ScheduleRow time="5:15 - 6:10">
        <b>Lightning Payments from a Merchant's Perspective</b><br><br>
        <nuxt-link to="/speaker/JoaoAlmeida">João Almeida</nuxt-link> - CTO of Open Node <br>
        <nuxt-link to="/speaker/MarioAguiluz">Mario Aguiluz</nuxt-link> - CSO of Ibex Mercado <br>

        Host: <nuxt-link to="/speaker/Rodrigo Gomez">Rodrigo Gomez</nuxt-link> - Bitrefill
      </ScheduleRow>

      <ScheduleRow time="6:15 - 6:25" :fixedheight="true">
        Closing Remarks: <nuxt-link to="/speaker/ChrisHunter">Chris Hunter</nuxt-link>
      </ScheduleRow>
    </tbody>
  </table>
</template>

<script>
import ScheduleRow from '~/components/Schedule/ScheduleRow'
export default {
  name: 'DayTwoEconSchedule3',
  components: { ScheduleRow }
}
</script>

<style scoped>

</style>
