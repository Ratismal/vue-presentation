<template>
  <div class="title">
    Hello, {{ name }}!
  </div>
</template>

<script>
export default {
  async asyncData () {
    const name = await new Promise((res) => {
      res('world!')
    })

    return {
      name
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 2em;
}
</style>
