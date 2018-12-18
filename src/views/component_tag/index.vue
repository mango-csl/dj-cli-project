<template>
  <div class="home">
    <table-template>
      <template slot-scope="{data}">
        <!--<component :is="button.component"-->
        <!--v-on="button.listeners"-->
        <!--v-bind="{row:props.data}">-->
        <!--</component>-->
        {{data}} ---
      </template>
      <!-- <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template slot="footer">
        <p>Here's some contact info</p>
      </template> -->
    </table-template>
    --------------------button-------------------

    <component :is="button_const.component" v-on="button_const.listeners">
    </component>
    --------------------render-------------------
    <component :is="renderDemo.component">
    </component>
    <!--v-on="button.listeners"-->
    <!--v-bind="{row:name}"-->
  </div>
</template>

<script>
  import Vue from 'vue';
  // @ is an alias to /src
  import tableTemplate from './child/tableTemplate.vue';
  import button from './child/button';

  const ORDERBTN = {
    name: "ORDERBTN",
    props: ['row'],
    template: `<span>拆分订单</span>`,
    created() {
      console.log('ORDERBTN created');
    },
    methods: {
      todo() {
        console.log('component todo');
        this.$emit('todo');
      }
    }
  };
  const render = Vue.extend({
    props: ['row'],
    render() {
      return <span>拆分订单</span>;
    }
  });

  export default {
    name: 'componentTag',
    data() {
      return {
        name: 'no name',
        button: {
          component: button,
          listeners: {
            'todo': function () {
              this.name = 'has name';
            }.bind(this)
          }
        },
        button_const: {
          component: ORDERBTN,
          listeners: {
            'todo': function () {
              this.name = 'has name';
            }.bind(this)
          }
        },
        renderDemo: {
          component: render,
        }
      };
    },
    components: {
      tableTemplate
    },
    created() {
      // console.log(1 === 2 && 'name' || 'test');
      // 1 === 2 && 'name' || 'test'
    }
  };
</script>
