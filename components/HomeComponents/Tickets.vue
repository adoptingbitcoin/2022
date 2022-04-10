<template>
  <Container id="tickets py-16 mb-16">
    <GradientHeader class="">
      {{ $t('tickets.title') }}
    </GradientHeader>
    <p class="text-xl my-5" />
    <div class="grid grid-cols-1 lg:grid-cols-2  grid-flow-row gap-4">
      <a href="https://pretix.eu/galoy/adoptingbitcoin/" target="_blank" class="ticket ticket-1 p-10 text-center text-white">
        <h5 class="text-2xl">
          {{ $t('tickets.ticket1') }}
        </h5>
        <span>{{ $t('tickets.ticket1Price') }}</span> <br>
        <span class="text-xs text-white">from November 1</span>
      </a>
      <div class="ticket ticket-2 p-10 text-center text-white">
        <h5 class="text-2xl">
          {{ $t('tickets.ticket2') }}
        </h5>
        <span>{{ $t('tickets.ticket2Price') }}</span>
      </div>
    </div>
    <BlueTitle class="mt-8">
      {{ $t('tickets.earlyAdopters.title') }}
    </BlueTitle>
    <p class="mb-5">
      {{ $t('tickets.earlyAdopters.text') }}
    </p>
    <h2 class="mt-8 text-3xl py-5 relative block text-blue">
      {{ $t('tickets.priceUp.title') }}
    </h2>
    <table class="mb-10">
      <tr v-for="price in $t('tickets.priceUp.prices')" :key="price.text">
        <td>
          <span v-html="price.text" />
        </td>
        <td class="px-10">
          <span v-html="price.price" />
        </td>
      </tr>
    </table>
  </Container>
</template>

<script>
import Container from '~/components/Container'
import GradientHeader from '~/components/GradientHeader'
import BlueTitle from '~/components/BlueTitle'
export default {
  name: 'Tickets',
  components: { BlueTitle, GradientHeader, Container },
  data () {
    return { }
  }
}
</script>

<style scoped>
.ticket{
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
.ticket-1{
  background-image: url("~/assets/images/ticket_1.jpg");
  backdrop-filter: grayscale();
}
.ticket-2{
   background-image: url("~/assets/images/ticket_regular_not_available.jpg");
 }
.ticket-3{
    background-image: url("~/assets/images/ticket_3.jpg");
  }
</style>
