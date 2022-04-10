<template>
  <div class="w-full">
    <Header />
    <Container>
      <BlueTitle>
        Error 404
      </BlueTitle>
      <p>
        The page you're looking for could not be found.
      </p>
      <div class="my-16" />
      <NuxtLink to="/" class="border-2 border-blue text-blue bg-white p-2 rounded hover:bg-blue hover:text-white">
        Back to Main Page
      </NuxtLink>
    </Container>
    <ContactUs />
    <ContactUs />
  </div>
</template>

<script>
import ContactUs from '~/components/HomeComponents/ContactUs'
import Header from '~/components/HomeComponents/Header'
import BlueTitle from '~/components/BlueTitle'
import Container from '~/components/Container'
export default {
  name: '404',
  components: { Container, BlueTitle, Header, ContactUs }
}
</script>

<style scoped>

</style>
