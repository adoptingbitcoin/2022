<template>
  <Container>
    <GradientHeader>{{ $t('sponsors.callforsponsors') }}</GradientHeader>

    <p class="mb-5" v-html="$t('sponsors.callforsponsorsText')" />

    <div class="mx-auto">

      <NuxtLink to="/sponsor-signup" class="inline-block">
        <CTA class="mx-auto">Call for sponsors</CTA>
      </NuxtLink>
    </div>
  </Container>
</template>

<script>
import Container from '~/components/Container'
import GradientHeader from '~/components/GradientHeader'
import CTA from '~/components/CTA'
export default {
  name: 'SponsorSignup',
  components: { CTA, GradientHeader, Container }
}
</script>

<style scoped>
input:not([type="radio"]), textarea{
  text-align: center;
  height: 100%;
  width: 100%;
}
input:focus, textarea:focus{
  outline: none;
}
input{
  background: none;
}
</style>
