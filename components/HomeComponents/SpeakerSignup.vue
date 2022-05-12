<template>
  <Container>
    <GradientHeader>{{ $t('speakers.callforparticipation') }}</GradientHeader>

    <p class="mb-5" v-html="$t('speakers.callforparticipation_text')" />

    <div class="mx-auto">

      <NuxtLink to="/speaker-signup">
        <CTA class="mx-auto">Call for participation</CTA>
      </NuxtLink>
    </div>
  </Container>
</template>

<script>
import Container from '~/components/Container'
import GradientHeader from "~/components/GradientHeader";
import CTA from "~/components/CTA";
export default {
  name: 'SpeakerSignup',
  components: {CTA, GradientHeader, Container }
}
</script>

<style scoped>
.cta-border{
  background: linear-gradient(to right, red, blue);
  height: fit-content;
}
.cta-border-grey{
   background: darkgrey;
   height: fit-content;
 }
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
