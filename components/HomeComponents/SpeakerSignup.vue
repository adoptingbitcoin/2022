<template>
  <Container>
    <GradientHeader>{{ $t('speakers.callforparticipation') }}</GradientHeader>

    <p class="mb-5" v-html="$t('speakers.callforparticipation_text')" />

    <div class="mx-auto">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf1jR7R2By3yts1R_lD7Bqu3Pm_U7WWB3A10O429dF3del5gg/viewform?embedded=true"
        width="100%"
        height="1600px"
        class="mx-auto"
      >Loading…</iframe>
    </div>
  </Container>
</template>

<script>
import Container from '~/components/Container'
import GradientHeader from "~/components/GradientHeader";
export default {
  name: 'SpeakerSignup',
  components: { GradientHeader, Container }
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
