<template>
  <div class="title">
    {{ addOne(5) }}
  </div>
</template>

<script>
export default {
  methods: {
    addOne (number) {
      return number + 1
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 2em;
}
</style>
