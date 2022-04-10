<template>
  <table class="table text-center">
    <tbody class="even:bg-gray-300">
      <ScheduleRow time="7:30- 09:00" :fixedheight="true">
        Registration + coffee & snacks
      </ScheduleRow>

      <ScheduleRow time="9:05 - 9:25">
        <b>Bitcoin is Hope!</b> <br><br>

        <nuxt-link to="/speaker/AlexGladstein">Alex Gladstein</nuxt-link> - Chief Strategy Officer at Human Rights Foundation
      </ScheduleRow>

      <ScheduleRow time="09:30 - 9:55">
        <b>The State of Lightning - a Helicopter View</b><br><br>
        <nuxt-link to="/speaker/AndersHelseth">Anders Helseth</nuxt-link> - Senior Analyst Arcane Crypto
      </ScheduleRow>

      <ScheduleRow time="10:00 - 10:25">
        <b>Developing the Bitcoin developer pipeline</b><br><br>
        <nuxt-link to="/speaker/AdamJonas">Adam Jonas</nuxt-link>- Chaincode / Qala
      </ScheduleRow>

      <ScheduleRow time="10:30 - 11:10">
        <b>Lightning and the Creator Economy</b><br><br>

        <nuxt-link to="/speaker/RoySheinfeld">Roy Sheinfeld</nuxt-link> - Co-founder & CEO of Breez <br>
        Adam Curry - Podfather 2.0 <br>
        <nuxt-link to="/speaker/MichaelTidwell">Michael Tidwell</nuxt-link> - Head of System Operations of Zebedee <br>
        <nuxt-link to="/speaker/ColinHarper">Colin Harper</nuxt-link> - Content and Tech LuxorTechnologies <br><br>

        Host: <nuxt-link to="/speaker/AnitaPosch">Anita Posch</nuxt-link> - Bitcoin Advocate, Author and Podcaster
      </ScheduleRow>

      <ScheduleRow time="11:15 - 12:00">
        <b>Fireside Chat: El Salvador's Future is Bright with Bitcoin</b><br><br>

        <nuxt-link to="/speaker/MonicaTaher">Monica Taher</nuxt-link> - Technological & Economic International Affairs at Trade & Investments Secretariat - Government of El Salvador
        <br><br>

        Host: <nuxt-link to="/speaker/WillHernandez">Will Hernandez</nuxt-link> - Growth & Business Manager Paxful
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
  name: 'DayTwoEconSchedule1',
  components: { ScheduleRow }
}
</script>

<style scoped>

</style>
