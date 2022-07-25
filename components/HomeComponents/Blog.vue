<template>
  <Container>

    <GradientHeader>Blog</GradientHeader>

    <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 items-start my-4">

      <div class="">
        <a href="https://medium.com/@AdoptingBTC/give-me-your-builders-developers-and-educators-3370775d3047" target="_blank" class="hover:underline">
          <img src="~/assets/images/blog/give-me-your-builders.jpg" class="w-full mb-2">
          <h5 class="text-2xl">Give me your builders, developers and educators. Your investors, entrepreneurs and Bitcoin advocates.</h5>
        </a>
      </div>

      <div class="">
        <a href="https://medium.com/@AdoptingBTC/back-to-bitcoin-country-announcing-adopting-bitcoin-2022-94edb49ee54a" target="_blank" class="hover:underline">
          <img src="~/assets/images/blog/blog2.jpg" class="w-full mb-2">
          <h5 class="text-2xl">Back to Bitcoin Country: Announcing Adopting Bitcoin 2022</h5>
        </a>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '~/components/Container'
import GradientHeader from '~/components/GradientHeader'
import CTA from '~/components/CTA'
export default {
  name: 'Blog',
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
