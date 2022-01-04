<template>
  <div class="title">
    Hello, {{ name }}!
    <br>
    You have ordered {{ items }} items for ${{ price }} each.
    <br>
    Your total is ${{ items * price }}.
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'world!',
      items: 4,
      price: 5
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 2em;
}
</style>
