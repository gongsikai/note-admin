import { createStore } from "vuex"

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      // count: 0
      // token: "",
      token: localStorage.getItem('token'),
      // name: localStorage.getItem('token'),
      name: localStorage.getItem('name')
    }
  },
  mutations: {
    // increment (state) {
    setToken (state) {
      // state.count++
      state.token = localStorage.getItem('token')
    },
    setUserName (state) {
      // state.count++
      // state.token = localStorage.getItem('token')
      // state.token = localStorage.getItem('name')
      state.name = localStorage.getItem('name')
    }
  }
})

export default store