<script setup lang="ts">

import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import md5 from "md5";

import Api from '../api/index.ts'

const name = ref('')
const pass = ref('')

const store = useStore()
const router = useRouter()

// const onLogin = ({ name, pass }) => {
const onLogin = () => {
  // Api.USER.LOGIN({ name: name.value, pass: md5(pass.value) }).then((res) => {
  Api.USER.LOGIN({ name: name.value, pass: md5(pass.value) }).then(({ token }) => {
    // console.log('res', res)
    // localStorage.setItem('token', res.token);
    localStorage.setItem('token', token);
    store.commit('setToken')
    ElMessage({
      message: '登录成功',
      type: 'success'
    })
    router.push('/')
    // location.reload()
    // location.href = location.origin
  })
}

</script>

<template>
  <div class="logins">
    <!-- <h1>This is an login page</h1> -->
    <h1 class='login-text'>登录</h1>
    <el-row class="name-row">
      <el-col :span="4">
        <p>用户</p>
      </el-col>
      <el-col :span="10">
        <el-input v-model="name"/>
      </el-col>
    </el-row>
    <el-row class="pass-row">
      <el-col :span="4">
        <p>密码</p>
      </el-col>
      <el-col :span="10">
        <el-input v-model="pass"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-button type="primary" @click="onLogin(1)">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.login-text {
  padding: 10px 0px;
}
.name-row, .pass-row {
  padding-bottom: 10px;
}
</style>
