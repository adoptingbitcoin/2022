<template>
  <div class="">
    <div v-for="q in faqList" :key="q.question" class="">
      <FAQItem :item="q" />
    </div>
  </div>
</template>

<script>
import FAQItem from '~/components/FAQComponents/FAQItem'
export default {
  name: 'FAQList',
  components: { FAQItem },
  props: {
    faqList: {
      type: Array,
      default: () => { return [] }
    }
  }
}
</script>

<style scoped>

</style>
