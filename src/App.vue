<template>
  <SelectEncounter></SelectEncounter>
</template>

<script>
import SelectEncounter from './components/SelectEncounter.vue'

export default {
  name: 'App',
  components: {
    SelectEncounter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
