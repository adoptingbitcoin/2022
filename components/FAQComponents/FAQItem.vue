<template>
  <div class="faqItem">
    <button class="accordion" :class="{'active': panelIsShown}" @click="panelIsShown = !panelIsShown">
      {{ item.question }}
    </button>
    <div class="panel" :class="{'block': panelIsShown, 'hidden': !panelIsShown}">
      <p class="py-5" v-html="item.answer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQItem',
  props: {
    item: {
      type: Object,
      default: () => { return {} }
    }
  },
  data () {
    return {
      panelIsShown: false
    }
  }
}
</script>

<style scoped>
/* Style the buttons that are used to open and close the accordion panel */
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .accordion:hover {
  background-color: #ccc;
}

/* Style the accordion panel. Note: hidden by default */
.panel {
  padding: 0 18px;
  background-color: white;
  overflow: hidden;
}
</style>

<style>
.faqItem a{
  @apply text-blue;
}
</style>
