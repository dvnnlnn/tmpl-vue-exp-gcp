<template>
  <div class="home">
    <NormalButton @click="getData">Get Data</NormalButton>
  </div>
</template>

<script>
import getData from '@/actions/getData';
import NormalButton from '@/components/NormalButton.vue';

export default {
  name: 'Home',
  methods: {
    getData,
  },
  components: {
    NormalButton,
  },
};
</script>

<style lang="scss" scoped>
button {
  margin: 5px;
}
</style>
