<script setup lang="ts">

import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import md5 from "md5";

import API from '../api/index.ts'

const name = ref('')
const pass = ref('')

const store = useStore()
const router = useRouter()

// const localStorageToken = localStorage.getItem('token')

const getUserName = () => {
  // console.log('localStorageToken', localStorageToken)
  // if (!localStorageToken) return ;
  if (!localStorage.getItem('token')) return ;
  // API.NOTE.LIST().then((res) => {
    // API.USER.NAME().then((data: { name: string } = { name: '' }) => {
  API.USER.NAME().then( (data: { name: string } = { name: '' }) => {
    console.log('1', 1)
    // console.log('res.data', res.data)
    console.log('res.data', data.name)
    // list.value = res.data
    // console.log('list.value', list.value, list)
    // noteListData.value = res.data
    localStorage.setItem('name', data.name)
    // store.commit('setUserName', data.name)
    store.commit('setUserName')
    ElMessage({
      message: '登录成功',
      type: 'success'
    })
    router.push('/')
    // userNameData.value = data.name
    // console.log('userNameData.value', userNameData.value, userNameData)
  })
}

// const onLogin = ({ name, pass }) => {
const onLogin = () => {
  // Api.USER.LOGIN({ name: name.value, pass: md5(pass.value) }).then((res) => {
  // Api.USER.LOGIN({ name: name.value, pass: md5(pass.value) }).then(({ token }) => { 
  API.USER.LOGIN_ADMIN({ name: name.value, pass: md5(pass.value) }).then(({ token }) => {
    // console.log('res', res)
    // localStorage.setItem('token', res.token);
    localStorage.setItem('token', token);
    store.commit('setToken')
    // store.commit('setUserName')
    getUserName()
    // getUserName().then(() => {
    //   ElMessage({
    //     message: '登录成功',
    //     type: 'success'
    //   })
    //   router.push('/')
    // })
    // ElMessage({
    //   message: '登录成功',
    //   type: 'success'
    // })
    // router.push('/')
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
.logins {
  text-align: center;
}
.login-text {
  padding: 10px 0px;
}
.name-row, .pass-row {
  padding-bottom: 10px;
}
</style>
