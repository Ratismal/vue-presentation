<template>
  <div class="title">
    Hello, {{ name }}!
    <template v-if="true">
      <div>One</div>
      <div>Two</div>
    </template>
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
