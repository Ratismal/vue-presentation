<template>
  <div class="title">
    Hello, {{ name }}!
    <div class="red">
      Red
    </div>
    <div :class="'green'">
      Green
    </div>
    <div :class="['blue', 'white-text']">
      Blue with White Text
    </div>
    <div :class="{yellow: true, bold: true}">
      Yellow with Bolded Text
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
.blue {
  background: blue;
}
.green {
  background: green;
}
.yellow {
  background: yellow;
}
.white-text {
  color: white;
}
.bold {
  font-weight: bold;
}
</style>
