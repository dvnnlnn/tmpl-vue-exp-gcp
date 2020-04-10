<template>
  <div class="home">
    <button @click="getData">Get Data</button>
  </div>
</template>

<script>
import { getData } from '@/functions/getData';

export default {
  name: 'Home',
  methods: {
    getData,
  },
};
</script>

<style lang="scss" scoped>
button {
  margin: 5px;
}
</style>
