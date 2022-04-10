<template>
  <table class="table text-center">
    <tbody class="even:bg-gray-300">
      <ScheduleRow time="7:30- 09:00" :fixedheight="true">
        Registration + coffee & snacks
      </ScheduleRow>

      <ScheduleRow time="09:00 - 09:10" :fixedheight="true">
        Opening Remarks: <nuxt-link to="/speaker/ChrisHunter">Chris Hunter</nuxt-link>
      </ScheduleRow>

      <ScheduleRow time="09:15 - 09:30">
        <b>Welcome to El Salvador!</b> <br><br>
        <nuxt-link to="/speaker/MariaLuisaHayem">María Luisa Hayem Brevé</nuxt-link> <br>
        <small><i>Minister of Economy El Salvador</i></small> <br><br>
        <nuxt-link to="/speaker/MorenaValdez">Morena Ileana Valdez Vigil</nuxt-link> <br>
        <small><i>Minister of Toursim El Salvador</i></small> <br><br>
        <small>(Spanish / English)</small>
      </ScheduleRow>

      <ScheduleRow time="09:35 - 10:10">
        <b>Bootstrapping Bitcoin Adoption</b> <br><br>
        <nuxt-link to="/speaker/MikePeterson">Mike Peterson</nuxt-link> - Director of Bitcoin Beach <br><br>
        <i>Hosted by: Gerson Martinez</i>
      </ScheduleRow>

      <ScheduleRow time="10:15 - 11:00">
        <b>El Salvador - Paving the Way for Bitcoin Adoption in South America</b> <br><br>

        <nuxt-link to="/speaker/JehudiCastroSierra">Jehudi Castro Sierra</nuxt-link> - Former Vice-Minister of Digital Economy Colombia <br><br>
        <nuxt-link to="/speaker/MonicaTaher">Monica Taher</nuxt-link> - Technological & Economic International Affairs at Trade & Investments Secretariat - Government of El Salvador
        <nuxt-link to="/speaker/GaelSanchezSmith">Gael Sanchez Smith</nuxt-link> - Author of Bitcoin lo Cambia Todo<br><br>
        <nuxt-link to="/speaker/CarlosMiguelRivasCarillo">Carlos Miguel Rivas Carillo</nuxt-link> - Regulatory Specialist
        <br><br>

        Host: <nuxt-link to="/speaker/CamilaCampton">Camila Campton</nuxt-link> - Social Media Manager Swan Bitcoin <br><br>
        <small>(Spanish)</small>
      </ScheduleRow>

      <ScheduleRow time="11:05  - 11:40">
        <b>Bitcoin for Non-Profits</b> <br><br>

        <nuxt-link to="/speaker/JoshYoung">Josh Young</nuxt-link> - NewStory <br>
        <nuxt-link to="/speaker/EnriqueBerrios">Enrique Berrios</nuxt-link> - Dentist at Bitcoin Smiles <br><br>

        Host: <nuxt-link to="/speaker/ChrisHunter">Chris Hunter</nuxt-link> - Co-Host / Galoy
      </ScheduleRow>

      <ScheduleRow time="11:45 - 12:10">
        <b>Take BTC to the Third Layer</b> <br><br>

        <nuxt-link to="/speaker/ChasePerkins">Chase Perkins</nuxt-link> - Founder ImperviousAi
      </ScheduleRow>

      <ScheduleRow time="12:10 - 1:30" :fixedheight="true">
        Lunch break
      </ScheduleRow>
    </tbody>
  </table>
</template>

<script>
import ScheduleRow from '~/components/Schedule/ScheduleRow'
export default {
  name: 'DayOneEconSchedule1',
  components: { ScheduleRow }
}
</script>

<style scoped>

</style>
