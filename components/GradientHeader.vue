<template>
  <h2 class="text-3xl md:text-5xl font-bold relative block">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: 'GradientHeader'
}
</script>

<style scoped>
h2{
  background: -webkit-linear-gradient(10deg, #e60000, #004bb3, #004bb3);
  width: fit-content;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
