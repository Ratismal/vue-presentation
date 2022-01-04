<template>
  <div class="title">
    Hello, {{ name }}!
    <div @click.prevent="clicked = true">
      <div :class="{red: clicked}">
        Click me!
      </div>
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

.red {
  background: red;
}
</style>
