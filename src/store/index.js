import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      number: 0
    }
  },
  mutations: {
    add(state) {
      state.number += 1
    }
  },
  actions: {
    asyncAdd({commit}){
      setTimeout(() => {
        commit('add')
      }, 2000);
    }
  },
  getters: {
    // 需要返回数据
    three(state) {
      return state.number * 3
    }
  }
})
export default store