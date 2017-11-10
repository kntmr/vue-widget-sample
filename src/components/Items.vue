<template>
  <div>
    <Item v-for="item in items" :item="item" :key="item.id"></Item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from './Item'
export default {
  name: 'items',
  components: { Item },
  computed: mapGetters({
    items: 'items'
  }),
  created () {
    this.$store.dispatch('getItems')
  }
}
</script>

<style scoped>
</style>
