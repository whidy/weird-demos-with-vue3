<template>
  <div>{{ option }}</div>
</template>

<script setup lang="ts">
const props = defineProps({
  option: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped></style>
