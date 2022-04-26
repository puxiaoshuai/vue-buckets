<template>
  <div>
    <p>遗留问题,vue3中数组内容的改变,最好放到state中进行</p>
    <a-input v-model:value="inputValue" placeholder="请输入" @keydown.enter="addInput">
      <template #addonAfter>
        <CloseCircleOutlined @click="clear" />
      </template>
    </a-input>

    <ol>
      <li v-for="item in state.todoList">
        <a-checkbox v-model:checked="item.done"></a-checkbox>
        <span :class="{ underline: item.done }">{{ item.name }}</span>
      </li>
    </ol>
    <div>
      <a-checkbox v-if="state.todoList.length > 0" v-model:checked="checkALL">全选</a-checkbox
      >{{ active }} / {{ all }}
    </div>
  </div>
</template>


<script setup>
// 使用 script setup 就可以直接 使用变量了，不需要在进行 return返回了
import { CloseCircleOutlined } from "@ant-design/icons-vue";
import { ref, reactive, computed } from "vue";
import { message } from "ant-design-vue";
const inputValue = ref("");
const state = reactive({
  todoList: []
});
function addInput(e) {
  const data = e.target.value;
  if (data.trim() === "") {
    message.info("请输入内容");
    return;
  }
  state.todoList.push({ name: inputValue.value, done: false }); //使用需要value，导出不用 value
  inputValue.value = "";
}
function clear() {
  state.todoList = state.todoList.filter((item) => !item.done);
}
const active = computed(() => {
  return state.todoList.filter((item) => !item.done).length; //还是多少没做
});
const all = computed(() => {
  return state.todoList.length;
});

const checkALL = computed({
  //获取值的时候触发
  get() {
    // 方式1
    // if (state.todoList.length === 0) {
    //   return false;
    // }
    // return state.todoList.filter((item) => !item.done).length === 0;
    //方式2
    return active.value === 0;
  },
  //值改变的时候触发，
  set(val) {
    console.log("hh", val);
    state.todoList.forEach((todo) => {
      todo.done = val;
    });
  }
});
// export default {
//   components:{
//     CloseCircleOutlined,
//   },
//   setup() {

//     return {
//       inputValue,
//       addInput,
//       state,
//       clear,
//       all,
//       active,
//       checkALL
//     };
//   }
// };
</script>

<style scoped>
.underline {
  color: gray;
  text-decoration: line-through;
}
</style>
