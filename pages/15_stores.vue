<template>
  <div class="title">
    Hello, {{ name }}!
    <input v-model="nameInput">
    <button @click.prevent="setName(nameInput)">
      Submit
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      nameInput: ''
    }
  },
  computed: {
    ...mapGetters(['name'])
  },
  methods: {
    ...mapActions(['setName'])
  }
}
</script>

<style scoped>
.title {
  font-size: 2em;
  user-select: none;
}
</style>
