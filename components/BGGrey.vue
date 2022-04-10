<template>
  <div class="background">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BGGrey'
}
</script>

<style scoped>
.background::before{
  background-image: url("~/assets/images/speaker-tile.jpg");
  background-position: center center;
  background-repeat: repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  z-index: -99999;
}
.background{
  position: relative;
}
</style>
