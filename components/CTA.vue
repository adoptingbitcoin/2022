<template>
  <div class="cta-border p-1 rounded mx-0 my-5">
    <div class="bg-white">
      <a :href="href" :target="target" class="cta-a text-lg font-bold px-5 py-2 relative block">
        <slot />
      </a>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CTA',
  props: [
    'href',
    'target'
  ]
}
</script>

<style scoped>
.cta-border{
  background: linear-gradient(to right, red, blue);
  width: fit-content;
  height: fit-content;
}
a::before{
  background: white;
  content: "";
}
a{
  background: linear-gradient(to right, red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
