<template>
  <div id="app" class="my-widget">
    <nav-header></nav-header>
    <router-view/>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader'
export default {
  name: 'app',
  components: { NavHeader }
}
</script>

<style scoped>
.my-widget {
  overflow: auto;
}
</style>
