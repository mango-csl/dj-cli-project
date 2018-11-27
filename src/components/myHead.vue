<template>
  <div class="my-head">
    <div v-for="item in menu" class="my-head-item">
      <div class="my-head-item-word">
        <router-link :to="item.value">{{ item.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-head',
  data () {
    return {
      menu: [
        { name: '首页', value: 'index' },
        { name: '管理', value: 'manage' },
        { name: '详情', value: 'detail' }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.my-head {
  display: flex;
  justify-content: space-around;
  background-color: lightskyblue;
  &-item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    height: 50px;
    &:hover {
      background-color: rgba(55, 178, 255, 0.671);
    }
    &-word {
      padding: 5px 30px;
      border: dotted 1px black;
      & > a {
        text-decoration: none;
      }
    }
  }
}
</style>
