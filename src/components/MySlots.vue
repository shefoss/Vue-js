<template>
  <div class="slot">
    <h1>My name is {{ name }}</h1>
    <slot name="slotTtle"></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
  },
};
</script>
