<template>
  <div class="title">
    Hello, {{ name }}!
    <div @click.prevent="clicked = true">
      <template v-if="!clicked">
        Click me!
      </template>
      <template v-else>
        You clicked me!
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'world!',
      clicked: false
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 2em;
}
</style>
