<template>
  <button @click="onClick">{{text}}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
};
</script>

<style scoped>
</style>
