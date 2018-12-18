<template>
  <a href="javascript:;" @click.stop="todo">拆分订单</a>
</template>

<script>
  export default {
    name: "button",
    props: ['row'],
    created() {
      console.log('button created');
    },
    methods: {
      todo() {
        console.log('component todo');
        this.$emit('todo');
      }
    }
  };
</script>

<style scoped>

</style>
