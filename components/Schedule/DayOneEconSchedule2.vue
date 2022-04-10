<template>
  <table class="table text-center">
    <tbody class="even:bg-gray-300">
      <ScheduleRow time="1:35 - 2:00">
        <b>Free Private Cities and Bitcoin</b> <br><br>

        <nuxt-link to="/speaker/VeronikaKuett">Veronika Kuett</nuxt-link> / Tipolis <br>
        <nuxt-link to="/speaker/PeterYoung">Peter Young</nuxt-link> / Free Private Cities Foundation <br>
      </ScheduleRow>

      <ScheduleRow time="2:05 - 2:30">
        <b>Architecting a Self-Sovereign Economy</b> <br><br>
        <nuxt-link to="/speaker/JohnCarvalho">John Carvalho</nuxt-link> - CEO of Stealth Company
      </ScheduleRow>

      <ScheduleRow time="2:35 - 3:00">
        <b>Mystery Speaker</b> <br><br>

        (TBA)
      </ScheduleRow>

      <ScheduleRow time="3:05 - 3:55">
        <b>If it looks better, it works better</b> <br><br>

        <nuxt-link to="/speaker/AnthonyPotdevin">Anthony Potdevin</nuxt-link> - Co-Founder Amboss Technologies <br>
        <nuxt-link to="/speaker/JohnsBeharry">Johns Beharry</nuxt-link> - Bitcoin designer at Peak Shift <br>
        <nuxt-link to="/speaker/JohnCarvalho">John Carvalho</nuxt-link> - The Biz <br> <br>

        Host: <nuxt-link to="/speaker/AlexandraMoxin">Alexandra Moxin</nuxt-link> - Advance Tech Podcast <br>
      </ScheduleRow>

      <ScheduleRow time="4:00 - 4:30" :fixedheight="true">
        Coffee Break
      </ScheduleRow>
    </tbody>
  </table>
</template>

<script>
import ScheduleRow from '~/components/Schedule/ScheduleRow'
export default {
  name: 'DayOneEconSchedule2',
  components: { ScheduleRow }
}
</script>

<style scoped>

</style>
