<template>
  <div class="title">
    Hello, {{ name }}!
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'world!'
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 2em;
}
</style>
