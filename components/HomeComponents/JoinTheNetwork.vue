<template>
  <div class="jointhenetwork">
  <Container>
    <GradientHeader class="mb-5">
      {{ $t('jointhenetwork.title') }}
    </GradientHeader>
    <div class="grid grid-cols-1  grid-flow-row gap-4 mb-14">
      <p v-html="$t('jointhenetwork.text1')" />
      <p v-html="$t('jointhenetwork.text2')" />
      <p v-html="$t('jointhenetwork.text3')" />
    </div>
    <div class="flex justify-end">
      <CTA class="" href="#tickets">BUY YOUR TICKET</CTA>
    </div>

    <div class="w-full">
      <img class="box-img" src="~/assets/images/box.png" alt="">
    </div>

  </Container>
  </div>
</template>

<script>
import Container from '~/components/Container'
import BlueTitle from '~/components/BlueTitle'
import CTA from '~/components/CTA';
import GradientHeader from "~/components/GradientHeader";
export default {
  name: 'JoinTheNetwork',
  components: {GradientHeader, CTA, BlueTitle, Container }
}
</script>

<style scoped>
@media (min-width: 1024px){
  .multicolumn{
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;

    -webkit-column-gap: 50px;
    -moz-column-gap: 50px;
    column-gap: 50px;

  }
}
.jointhenetwork {
    background-image: url("~/assets/images/bg-leftRainbow.jpg");
    background-size: cover;
}
.box-img {
  max-width: 300px;
  @apply my-14 mx-auto;
}
</style>
