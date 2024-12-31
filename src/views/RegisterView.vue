<script setup lang="ts">

import { ref } from 'vue';
import { ElMessage } from 'element-plus'
import md5 from "md5";
import Api from '../api/index.ts'

const name = ref('')
const pass = ref('')

// const onRegister = ({ name, pass }) => {
const onRegister = () => {
  Api.USER.REGISTER({ name: name.value, pass: md5(pass.value) }).then(() => {
    name.value = ''
    pass.value = ''
    ElMessage({
      message: '注册成功',
      type: 'success'
    })
  })
}

</script>

<template>
  <div class="registers">
    <!-- <h1>This is an register page</h1> -->
    <h1 class="register-text">注册</h1>
    <el-row class="name-row">
      <el-col :span="4">
        <p>用户</p>
      </el-col>
      <!-- <el-col :span="10"> -->
      <el-col :span="20">
        <el-input v-model="name"/>
      </el-col>
    </el-row>
    <el-row class="pass-row">
      <el-col :span="4">
        <p>密码</p>
      </el-col>
      <!-- <el-col :span="10"> -->
      <el-col :span="20">
        <el-input v-model="pass"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-button type="primary" @click="onRegister(1)">注册</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .register {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.registers {
  text-align: center;
  /* margin: 0 auto; */
}
.register-text {
  padding: 10px 0px;
}
/* .name-row {
  padding-top: 40px;
} */
.name-row, .pass-row {
  padding-bottom: 10px;
}
</style>
