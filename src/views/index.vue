<template>
  <div class="index">
    index
    <el-button @click="getMsg">getmessage</el-button>
    <el-button @click="getUser">getUser</el-button>
    <el-button @click="getCode">getCode</el-button>
  </div>
</template>

<script>
import manageService from '../api/service/manage.js';
export default {
  name: 'index',
  methods: {
    getMsg() {
      manageService.getMessage({value: '1234'});
    },
    getUser() {
      manageService.getUserName({value: '1234'});
    },
    getCode() {
      manageService.getCode({value: '1234'});
    }
  }
};
</script>