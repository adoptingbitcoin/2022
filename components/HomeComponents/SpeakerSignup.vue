<template>
  <Container>
    <GradientHeader>{{ $t('speakers.callforparticipation') }}</GradientHeader>

    <p class="mb-5" v-html="$t('speakers.callforparticipation_text')" />

    <div class="mx-auto">

      <NuxtLink to="/speaker-signup" class="inline-block">
        <CTA class="mx-auto">
          Submit Talk
        </CTA>
      </NuxtLink>

    </div>
  </Container>
</template>

<script>
import Container from '~/components/Container'
import GradientHeader from '~/components/GradientHeader'
import CTA from '~/components/CTA'
import SponsorSignup from '~/components/HomeComponents/SponsorSignup'
export default {
  name: 'SpeakerSignup',
  components: { SponsorSignup, CTA, GradientHeader, Container }
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
