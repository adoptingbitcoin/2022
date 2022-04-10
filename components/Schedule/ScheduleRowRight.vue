<template>
  <tr>
    <td class="border border-blue box-border text-sm">
      <slot />
    </td>
    <td class="text-xs whitespace-nowrap bg-blue text-white border border-white time-field" :class="{fixedheight: fixedheight}">
      {{ time }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ScheduleRowRight',
  props: {
    time: {
      type: String,
      default: () => { return '' }
    },
    fixedheight: {
      type: Boolean,
      default: () => { return false }
    }
  }
}
</script>

<style scoped>
  td{
    @apply p-2;
  }
  .time-field{
    width: 150px;
  }
  .fixedheight{
    height: 50px;
  }
  a{
    @apply font-bold underline;
  }
</style>
