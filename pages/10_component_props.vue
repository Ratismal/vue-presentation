<template>
  <div class="title">
    <prop-comp content="Hello, world!" />
    <prop-comp />
  </div>
</template>

<script>
import PropComp from '@/components/PropComp.vue'

export default {
  components: { PropComp },
  computed: {
    name () {
      return 'world!'
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 2em;
}
</style>
