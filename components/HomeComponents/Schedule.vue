<template>
  <BGGrey class="pb-16" id="schedule">
    <Container>
      <GradientHeader class="mb-16">
        {{ $t('schedule.title') }}
      </GradientHeader>

      <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-10">
        <div class="scheduleDay mx-auto">
          <h3 class="text-2xl font-bold text-blue">{{ $t('schedule.day') }} 1</h3>
          <span class="font-bold">{{ $t('schedule.date1') }}</span>
          <ul v-html="$t('schedule.day1list')"></ul>
          <div class="mx-auto w-content cursor-pointer mx-2" @click="show1()">
            <CTA> SHOW SCHEDULE </CTA>
          </div>
          <div :class="{hidden: !showDay1}" class="">
            <div class="md:hidden my-10">
              <GradientHeader class="mx-auto">Day 1 Schedule</GradientHeader>
              <DayOneSchedule />
            </div>
          </div>
        </div>
        <div class="scheduleDay mx-auto">
          <h3 class="text-2xl font-bold text-blue">{{ $t('schedule.day') }} 2</h3>
          <span class="font-bold">{{ $t('schedule.date2') }}</span>
          <ul v-html="$t('schedule.day2list')"></ul>
          <div class="mx-auto w-content cursor-pointer mx-2" @click="show2()">
            <CTA> SHOW SCHEDULE</CTA>
          </div>
          <div :class="{hidden: !showDay2}" class="">
            <div class="md:hidden my-10">
              <GradientHeader class="mx-auto">Day 2 Schedule</GradientHeader>
              <DayTwoSchedule />
            </div>
          </div>
        </div>

        <div class="scheduleDay mx-auto">
          <h3 class="text-2xl font-bold text-blue">{{ $t('schedule.day') }} 3</h3>
          <span class="font-bold">{{ $t('schedule.date3') }}</span>
          <ul v-html="$t('schedule.day3list')"></ul>
          <a class="mx-auto w-content cursor-pointer mx-2 block" href="https://bitcoinbeachsv.com" target="_blank">
            <CTA> SHOW SCHEDULE</CTA>
          </a>
        </div>
      </div>

      <div :class="{hidden: !showDay1}" class="my-10 ">
        <div class="hidden md:block">
          <GradientHeader class="mx-auto">Day 1 Schedule</GradientHeader>
          <DayOneSchedule />
        </div>
      </div>
      <div :class="{hidden: !showDay2}" class="my-10">
        <div class=" hidden md:block">
          <GradientHeader class="mx-auto">Day 2 Schedule</GradientHeader>
          <DayTwoSchedule />
        </div>
      </div>
      <div :class="{hidden: !showDay3}">DAY 3</div>

        <img src="~/assets/images/day3schedule.jpg" class="w-full h-auto my-5" alt="">

      <div class="color-bg p-5 text-white rounded mt-10">
        <p v-html="$t('tickets.otherConferences')"/>
      </div>
    </Container>
  </BGGrey>
</template>

<script>
import GradientHeader from '~/components/GradientHeader'
import Container from '~/components/Container'
import BGGrey from '~/components/BGGrey'
import CTA from '~/components/CTA'
import DayOneSchedule from '~/components/Schedule/DayOneSchedule'
import DayTwoSchedule from '~/components/Schedule/DayTwoSchedule'
export default {
  name: 'Schedule',
  components: { DayTwoSchedule, DayOneSchedule, CTA, BGGrey, Container, GradientHeader },
  data () {
    return {
      showDay1: false,
      showDay2: false,
      showDay3: false
    }
  },
  methods: {
    hideAllSchedules () {
      this.showDay1 = false
      this.showDay2 = false
      this.showDay3 = false
    },
    show1 () {
      if (this.showDay1) {
        this.hideAllSchedules()
      } else {
        this.hideAllSchedules()
        this.showDay1 = true
      }
    },
    show2 () {
      if (this.showDay2) {
        this.hideAllSchedules()
      } else {
        this.hideAllSchedules()
        this.showDay2 = true
      }
    },
    show3 () {
      if (this.showDay3) {
        this.hideAllSchedules()
      } else {
        this.hideAllSchedules()
        this.showDay3 = true
      }
    }
  }
}
</script>

<style scoped>
ul{
  list-style: initial;
  padding-left: 20pt;
}
.color-bg{
  background: -webkit-linear-gradient(10deg, #e60000, #004bb3, #004bb3);
}
</style>
