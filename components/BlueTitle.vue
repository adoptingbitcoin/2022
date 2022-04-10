<template>
  <h2 class="text-3xl font-bold py-5 relative block text-blue">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: 'BlueTitle'
}
</script>

<style scoped>
h2{
  width: fit-content;
}
</style>
