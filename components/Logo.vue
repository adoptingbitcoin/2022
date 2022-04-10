<template>
  <img src="~/assets/images/logo.png" alt="Logo">
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style scoped>
img{
  width: 150px;
  height: auto;
  display: inline;
}
@media (max-width: 768px) {
  img{
    width: 100px;
  }
}
</style>
