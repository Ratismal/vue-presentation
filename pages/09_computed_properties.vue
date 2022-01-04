<template>
  <div class="title">
    Hello, {{ name }}!
  </div>
</template>

<script>
export default {
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
