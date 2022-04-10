<template>
  <div class="container mx-auto">
    <Container>
      <BlueTitle class="">
        {{ $t('subscribe.title') }}
      </BlueTitle>
      <div class="mx-auto">
        <p class="mb-10">
          {{ $t('subscribe.text') }}
        </p>

        <form @submit.prevent="subscribe">
          <div class="cta-border p-1 rounded mx-auto my-5 text-center w-100 md:inline-block md:w-auto">
            <div class="bg-white px-5 py-2">
              <input v-model="email" type="email" :placeholder="$t('subscribe.enteremail')">
            </div>
          </div>

          <div class="cta-border p-1 rounded mx-auto my-5 text-center w-100 md:inline-block md:w-auto md:ml-5">
            <div class="bg-white px-5 py-2">
              <button type="submit">
                {{ $t('subscribe.signup') }}
              </button>
            </div>
          </div>
          <div v-if="error">
            There was an Error! <br>
            {{ errorMessage }}
          </div>
          <div v-if="success">
            Yay!
          </div>
          <div v-if="loading">
            Loading…
          </div>
        </form>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '~/components/Container'
import BlueTitle from '~/components/BlueTitle'
export default {
  name: 'Subscribe',
  components: { BlueTitle, Container },
  data () {
    return {
      email: '',
      error: false,
      success: false,
      loading: false,
      errorMessage: ''
    }
  },
  methods: {
    onError () {
      console.log('Error subscribing to Newsletter!')
    },
    onSuccess () {
      console.log('Successfully Subscribed to Newsletter!')
    },
    async subscribe () {
      if (this.email === '') {
        return
      }
      this.loading = true
      this.success = false
      this.error = false
      const result = await fetch('https://bitkushin.space/adoptingbitcoin_mail_subscribe.php?email=' + this.email)
      this.loading = false
      if (result.ok) {
        this.success = true
        this.email = ''
      } else {
        this.success = false
        this.error = true
        const errorMessage = await result.json()
        console.log(errorMessage)
        this.errorMessage = errorMessage.message
      }
    }
  }
}
</script>

<style scoped>
.cta-border{
  background: linear-gradient(to right, red, blue);
  height: fit-content;
}
input{
  text-align: center;
}
input:focus{
  outline: none;
}
</style>
