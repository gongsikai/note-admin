<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
// import { useStore, mapState } from "vuex"
import { useStore } from "vuex"

import API from "./api/index.ts"

import HelloWorld from './components/HelloWorld.vue'

// const token = ref("");
// const userNameData = ref("")

const store = useStore()

const localStorageToken = localStorage.getItem('token')

const logout = () => {
  localStorage.setItem('token', '');
  // localStorage.setItem('token', '');
  localStorage.setItem('name', '');
  // const store = useStore()
  store.commit('setToken')
  store.commit('setUserName')
  // token.value = ""
  // userNameData.value = ""
  // location.reload()
  // location.href = location.origin

}

const onRefreshToken = () => {
  // token.value = localStorageToken;
}

// const getUserName = () => {
//   if (!localStorageToken) return ;
//   // API.NOTE.LIST().then((res) => {
//   API.USER.NAME().then((data: { name: string } = { name: '' }) => {
//     // console.log('res.data', res.data)
//     console.log('res.data', data.name)
//     // list.value = res.data
//     // console.log('list.value', list.value, list)
//     // noteListData.value = res.data
//     localStorage.setItem('name', data.name)
//     // store.commit('setUserName', data.name)
//     store.commit('setUserName')
//     // userNameData.value = data.name
//     // console.log('userNameData.value', userNameData.value, userNameData)
//   })
// }

onMounted(() => {
  console.log('1', store.state.token)
  // onRefreshToken()
  // getUserName()
  // document.addEventListener('click', () => {
  //   setTimeout(() => {
  //     onRefreshToken()
  //   }, 1000)
  // })
  // const localStorageToken = localStorage.getItem('token')
  // this.$store.commit('increment')
  // const store = useStore()
  // token.value = localStorageToken
})

</script>

<template>
  <!-- <header> -->
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper"> -->
  <!-- <el-row> -->
  <!-- <div :class="$route.fullPath === '/' ? '' : 'wrapper'"> -->
    <!-- {{ $route.fullPath }} -->
    <!-- <div class="wrapper"> -->
    <!-- <el-col :span="10"> -->
    <!-- <el-col :span="10"> -->
  <el-row>
    <el-col>
      <HelloWorld msg="龚思凯笔记" />
    </el-col>
  </el-row>
  <!-- </el-col> -->
  <!-- </div> -->
  <!-- {{ JSON.stringify($route) }} -->

  <!-- <el-col :span="14"> -->
  <!-- <el-col> -->
  <el-row class="top-row">
    <el-col>
      <nav>
        <RouterLink to="/">首页</RouterLink>
        <!-- <RouterLink v-if="!$store.state.token" to="/register">注册</RouterLink>
        <RouterLink v-if="!$store.state.token" to="/login">登录</RouterLink> -->
        <!-- <RouterLink v-if="!token" to="/register">注册</RouterLink> -->
        <!-- <RouterLink v-if="!token" to="/register" @click="onRefreshToken(1)">注册</RouterLink> -->
        <!-- <RouterLink v-if="!$store.state.token" to="/register" @click="onRefreshToken(1)">注册</RouterLink> -->
        <!-- <RouterLink v-if="!token" to="/login">登录</RouterLink> -->
        <!-- <RouterLink v-if="!token" to="/login" @click="onRefreshToken(1)">登录</RouterLink> -->
        <RouterLink v-if="!$store.state.token" to="/login" @click="onRefreshToken(1)">登录</RouterLink>
        <!-- <el-button v-if="$store.state.token" to="/logout" @click="logout(1)">退出登录</el-button> -->
        <!-- <RouterLink to="/about">关于</RouterLink> -->
        <RouterLink to="/about" @click="onRefreshToken(1)">关于</RouterLink>
        <!-- <el-button v-if="$store.state.token" to="/logout" @click="logout(1)">退出登录</el-button> -->
        <!-- <el-button v-if="token" to="/logout" @click="logout(1)">退出登录</el-button> -->
        <!-- <el-span  class="username"v-if="$store.state.token && userNameData">{{ userNameData }}</el-span> -->
        <!-- <el-span  class="username"v-if="$store.state.token && $store.state.username">{{ $store.state.username }}</el-span> -->
        <el-span  class="username"v-if="$store.state.token && $store.state.name">{{ decodeURIComponent($store.state.name)}}</el-span>
        <el-button v-if="$store.state.token" to="/logout" @click="logout(1)">退出登录</el-button>
      </nav>
    </el-col>
    <!-- </el-row> -->
    <!-- </el-col> -->
  </el-row>
  <!-- </el-row> -->
    <!-- <div> -->
    <!-- </div> -->
  <!-- </header> -->

  <el-row>
    <el-col :span="24">
      <RouterView />
    </el-col>
  </el-row>

  <!-- </el-row> -->

  <el-row>
      <el-col :span="24">
        <p class="beian-paragraph"><a href="https://beian.miit.gov.cn">赣ICP备2024039799号-1</a></p>
      </el-col>
    </el-row>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    /* text-align: left; */
    text-align: center;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  /* .beian-paragraph { */
    /* text-aligin: center; */
    /* text-align: center; */
  /* } */
}
.beian-paragraph {
    /* text-aligin: center; */
  padding-top: 20px;
  text-align: center;
}
.top-row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
}
.username {
  padding: 0 20px;
}
</style>
