<template>
  <div>
    <button @click="handleClick">
      <slot>no text</slot>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>
