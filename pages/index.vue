<template>
  <div>
    Welcome to the Vue Presentation app!
    <ol>
      <li v-for="page of pages" :key="page.key">
        <nuxt-link :to="page.key">
          {{ page.name }}
        </nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pages: [
        { key: '/01_templating_syntax', name: 'Templating Syntax' },
        { key: '/02_conditional_rendering', name: 'Conditional Rendering' },
        { key: '/03_list_rendering', name: 'List Rendering' },
        { key: '/04_templates', name: 'Templates' },
        { key: '/05_event_handlers', name: 'Event Handlers' },
        { key: '/06_binding_attributes', name: 'Binding Attributes' },
        { key: '/07_classes', name: 'Classes' },
        { key: '/08_data_property', name: 'The Data Property' },
        { key: '/09_computed_properties', name: 'Computed Properties' },
        { key: '/10_component_props', name: 'Component Props' },
        { key: '/11_asyncData', name: 'The asyncData Property' },
        { key: '/12_methods', name: 'Methods' },
        { key: '/13_example_counter', name: 'Example Counter' },
        { key: '/14_watch', name: 'The watch Property' },
        { key: '/15_stores', name: 'Vuex Stores' },
        { key: '/16_layouts', name: 'Layouts' }
      ]
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
