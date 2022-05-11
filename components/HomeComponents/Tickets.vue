<template>
  <div class="bg">
  <Container id="tickets py-16 mb-16">
    <GradientHeader class="">
      {{ $t('tickets.title') }}
    </GradientHeader>
    <span v-html="$t('tickets.subtitle')" />
    <p class="text-xl my-5" />
    <div class="grid grid-cols-2 lg:grid-cols-4  grid-flow-row gap-4">

      <a href="https://pretix.eu/galoy/ab22/" target="_blank" class="ticket ticket-1 p-10" />
      <span class="ticket ticket-2 ticket-unavailable p-10" />
      <span class="ticket ticket-3 ticket-unavailable p-10" />
      <span class="ticket ticket-4 ticket-unavailable p-10" />
    </div>

    <GradientHeader class="mt-8">
      {{ $t('tickets.earlyAdopters.title') }}
    </GradientHeader>
    <p class="mb-5">
      {{ $t('tickets.earlyAdopters.text') }}
    </p>
    <div class="mb-10">
      <div class="grid grid-cols-2  grid-flow-row gap-4 mb-14">
        <div v-for="price in $t('tickets.priceUp.prices')" :key="price.text">
        <p v-html="price.text1" />
          <p v-html="price.text2" />
        <p v-html="price.text3" />
        <p v-html="price.text4" />
         </div>
         <div v-for="price in $t('tickets.priceUp.prices')" :key="price.text">
          <p v-html="price.price1" />
           <p v-html="price.price2" />
          <p v-html="price.price3" />
          <p v-html="price.price4" />
        </div>
      </div>
    </div>
    <GradientHeader class="mt-8">
      {{ $t('tickets.earlyAdopters.afterText') }}
    </GradientHeader>

    <div class="w-full my-5">
      <img class="box-img" src="~/assets/images/AB_toilet_paper.png" alt="">
    </div>

  </Container>
  </div>
</template>

<script>
import Container from '~/components/Container'
import GradientHeader from '~/components/GradientHeader'
import BlueTitle from '~/components/BlueTitle'
export default {
  name: 'Tickets',
  components: {
    BlueTitle,
    GradientHeader,
    Container
  },
  data () {
    return {}
  }
}

</script>

<style scoped>
  .ticket {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .ticket-1 {
    background-image: url("~/assets/images/ticket_1.png");
    backdrop-filter: grayscale();
  }

  .ticket-2 {
    background-image: url("~/assets/images/ticket_2.png");
  }

  .ticket-3 {
    background-image: url("~/assets/images/ticket_3.png");
  }

  .ticket-4 {
    background-image: url("~/assets/images/ticket_4.png");
  }

  .ticket-unavailable {
    opacity: 0.4;
  }

  .bg{
    background-image: url("~/assets/images/bg-yellow.jpg");
    background-repeat: repeat-y;
    background-position: top left;
    background-size: contain;
  }

  .box-img {
    max-width: 300px;
    @apply my-14 mx-auto;
  }

</style>
