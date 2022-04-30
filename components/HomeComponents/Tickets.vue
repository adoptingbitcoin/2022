<template>
  <Container id="tickets py-16 mb-16">
    <GradientHeader class="">
      {{ $t('tickets.title') }},
      {{ $t('tickets.subtitle') }}
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

    <!-- <div class="ticket ticket-3 p-10 text-center text-white">
      <h5 class="text-2xl">
        {{ $t('tickets.ticket3') }}
      </h5>
      <span>{{ $t('tickets.ticket3Price') }}</span>
    </div> -->

    <BlueTitle class="mt-8">
      {{ $t('tickets.earlyAdopters.title') }}
    </BlueTitle>
    <p class="mb-5">
      {{ $t('tickets.earlyAdopters.text') }}
    </p>
    <table class="mb-10">
      <tr v-for="price in $t('tickets.priceUp.prices')" :key="price.text">
        <td>
          <span v-html="price.text1" />
        </td>
        <td class="px-10">
          <span v-html="price.price1" />
        </td>
         <td>
          <span v-html="price.text2" />
        </td>
        <td class="px-10">
          <span v-html="price.price2" />
        </td>
         <td>
          <span v-html="price.text3" />
        </td>
        <td class="px-10">
          <span v-html="price.price3" />
        </td>
         <td>
          <span v-html="price.text4" />
        </td>
        <td class="px-10">
          <span v-html="price.price4" />
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
    components: {
      BlueTitle,
      GradientHeader,
      Container
    },
    data() {
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
    background-image: url("~/assets/images/ticket_1.jpg");
    backdrop-filter: grayscale();
  }

  .ticket-2 {
    background-image: url("~/assets/images/ticket_regular_not_available.jpg");
  }

  .ticket-3 {
    background-image: url("~/assets/images/ticket_3.jpg");
  }

</style>
