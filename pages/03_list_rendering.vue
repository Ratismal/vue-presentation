<template>
  <div class="title">
    Hello, {{ name }}!
    <ul>
      <li v-for="item, i of items" :key="i">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'world!',
      items: [
        {
          name: 'Item 1'
        },
        {
          name: 'Item 2'
        },
        {
          name: 'Item 3'
        },
        {
          name: 'Item 4'
        }
      ]
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 2em;
}
</style>
