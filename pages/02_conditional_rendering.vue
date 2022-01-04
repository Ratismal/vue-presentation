<template>
  <div class="title">
    Hello, {{ name }}!
    <div v-if="items === 1">
      You have ordered one item.
    </div>
    <div v-else-if="items < 5">
      You have ordered less than five items.
    </div>
    <div v-else>
      You have ordered five or more items.
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'world!',
      items: 4
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 2em;
}
</style>
