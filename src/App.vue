<template>
  <HamNav />
  <router-view />
</template>
<script>
import HamNav from "./components/HamNav.vue";

export default {
  name: "App",
  components: {
    HamNav,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
