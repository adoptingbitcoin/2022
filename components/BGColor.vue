<template>
  <div class="background">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BGColor'
}
</script>

<style scoped>
.background::before{
  background-image: url("~/assets/images/bg-mountains.jpg");
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  z-index: -99999;
}
.background {
  position: relative;
}
</style>
