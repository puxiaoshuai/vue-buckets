<template >
  <div>
    <a-button @click="add">+1</a-button>
    <h4>当前number={{num}}</h4>
    <p>getters值 ==>{{threeInfo}}</p>
    <a-button @click="add2">异步加载+1</a-button>
  </div>
</template>
<script setup lang="ts">
import { ref ,computed} from "vue";
import {useStore} from "vuex";
const store = useStore()
interface Iprops{
  
} 
const num = computed(() => {
  return store.state.number
})
const threeInfo = computed(()=>{
  return store.getters.three
})
function add() {
  store.commit('add')
}
function add2(){
  store.dispatch('asyncAdd')
}
</script>
