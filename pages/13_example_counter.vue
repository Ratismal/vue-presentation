<template>
  <div class="title">
    Hello, {{ name }}!
    <div @click.prevent="addCount">
      I've been clicked {{ count }} times.
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'world!',
      count: 0
    }
  },
  methods: {
    addCount () {
      this.count++
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 2em;
  user-select: none;
}
</style>
