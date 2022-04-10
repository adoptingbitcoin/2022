<template>
  <table class="table text-center">
    <tbody class="even:bg-gray-300">
      <ScheduleRow time="1:35 - 2:00">
        <b>Investing in the Lightning Network as the Next Internet</b><br><br>

        <nuxt-link to="/speaker/MaxWebster">Max Webster</nuxt-link> - Hivemind <br>
        <nuxt-link to="/speaker/JamesAndrew">James Andrew</nuxt-link> - Global Liquidity <br><br>

        Host: Jeff Gallas
      </ScheduleRow>

      <ScheduleRow time="2:05 - 2:30">
        <nuxt-link to="/speaker/HongFang">Hong Fang</nuxt-link> - CEO Okcoin
      </ScheduleRow>

      <ScheduleRow time="2:35 - 3:00">
        <b>El Salvador - The global pilot for the Bitcoin circular economy: A progress report</b><br><br>

        <nuxt-link to="/speaker/SergejKotliar">Sergej Kotliar</nuxt-link> - Founder & CEO Bitrefill
      </ScheduleRow>

      <ScheduleRow time="3:05 - 3:45">
        <b>Fireside: The Cure for Financial Apartheid</b><br><br>

        <nuxt-link to="/speaker/RayYoussef">Ray Youssef</nuxt-link> - CEO of Paxful <br><br>

        Host: <nuxt-link to="/speaker/RodrigoGomez">Rodrigo Gomez</nuxt-link> - Country Manager of Bitrefill - El Salvador
      </ScheduleRow>

      <ScheduleRow time="3:50 - 4:10" :fixedheight="true">
        Coffee Break
      </ScheduleRow>
    </tbody>
  </table>
</template>

<script>
import ScheduleRow from '~/components/Schedule/ScheduleRow'
export default {
  name: 'DayTwoEconSchedule2',
  components: { ScheduleRow }
}
</script>

<style scoped>

</style>
