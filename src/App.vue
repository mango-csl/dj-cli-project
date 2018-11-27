<template>
  <div id="app">
    <my-head></my-head>
    <router-view/>
  </div>
</template>

<script>
import myHead from './components/myHead.vue';
export default {
  name: 'App',
  components: {
    myHead
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>
