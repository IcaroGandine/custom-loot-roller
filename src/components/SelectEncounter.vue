<template>
  <div>
    <h1>Encounter Selector</h1>

    <h3>Enemy type</h3>
    
    <select>
      <option v-for="type in typeArray" :key="type">{{ type }}</option>
    </select>

    <var-button type="primary">Roll!</var-button>
  </div>
</template>

<script>
export default {
  name: "SelectEncounter",
  props: {},
  data() {
    return {
      typeArray: [
        "Aberration",
        "Beast",
        "Celestial",
        "Construct",
        "Dragon",
        "Elemental",
        "Fey",
        "Fiend",
        "Giant",
        "Humanoid",
        "Monstrosity",
        "Ooze",
        "Plant",
        "Undead",
      ],
    };
  },
};
</script>

<style scoped>
    select {
        margin-right: 1rem;
    }
</style>
