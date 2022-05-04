<template>
  <div class="container mx-auto">
    <Container>

      <BlueTitle class="text-center mx-auto">
        GET IN TOUCH
      </BlueTitle>

      <div class="flex justify-around my-16">
        <a href="#"><img src="~/assets/images/logo.png" class="h-32"></a>
        <a href="#"><img src="~/assets/images/logo.png" class="h-32"></a>
        <a href="#"><img src="~/assets/images/logo.png" class="h-32"></a>
      </div>


      <BlueTitle class="text-center mx-auto">
        {{ $t('subscribe.title') }}
      </BlueTitle>
      <div class="mx-auto">

        <form @submit.prevent="subscribe">
          <div class="grid grid-cols-3">

            <div class="col-span-2 border-blue border-4 p-1 rounded mx-auto my-5 text-center w-full md:inline-block">
              <div class="bg-white px-5 py-2">
                <input v-model="email" type="email" :placeholder="$t('subscribe.entermail')" class="w-full">
              </div>
            </div>

            <div class="border-blue border-4 p-1 rounded mx-auto my-5 text-center md:inline-block w-full md:ml-5">
              <div class="bg-white px-5 py-2">
                <button type="submit" class="w-full">
                  {{ $t('subscribe.signup') }}
                </button>
              </div>
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
  background: blue;
  height: fit-content;
  width: fit-content;
}
input{
  text-align: center;
}
input:focus{
  outline: none;
}
</style>
