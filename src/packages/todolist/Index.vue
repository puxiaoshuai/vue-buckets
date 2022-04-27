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
    <!-- todo 结束 -->
    <hr />
    <div style="margin: 40px">
      <a-button @click="changeNumber">点击修改h1颜色,随机</a-button>
      <h1>变色龙{{ number }}</h1>
    </div>
    <hr />
    <!-- 随机结束 -->
    <div style="margin: 40px">
      <a-button @click="changeFull">切换全局</a-button>
    </div>
    <!-- 全屏结束 -->
    <hr />
    <div style="margin: 40px">
      <Rate :value="rate"></Rate>
    </div>
    <!-- 星星组件结束 -->
    <hr />
    <div style="margin: 40px">
      <div class="dog"></div>
    </div>
    <hr />
    <div style="margin: 40px">
      <a-button @click="showView">隐藏</a-button>
      <transition name="fade">
        <a-button v-if="showbtn">点击上面的按钮来隐藏我</a-button>
      </transition>
    </div>
  </div>
</template>

<script setup>
// 使用 script setup 就可以直接 使用变量了，不需要在进行 return返回了
import { CloseCircleOutlined } from "@ant-design/icons-vue";
import { ref, reactive, computed, watchEffect, toRefs } from "vue";
import { message } from "ant-design-vue";
import useStorage from "./useTodolist.js";
import { useFullscreen } from "@vueuse/core";
const { isFullscreen, enter, exit, toggle } = useFullscreen();
import Rate from "./Rate.vue";
const inputValue = ref("");
const number = ref(0);
const h1Color = ref("blue");
const showbtn = ref(false)
const state = reactive({
  todoList: JSON.parse(localStorage.getItem("todolist")) || []
});
const rate = ref(3);
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
    state.todoList.forEach((todo) => {
      todo.done = val;
    });
  }
});
//剔除去，使用useloacalstoge
watchEffect(() => {
  if (state.todoList.length > 0) {
    localStorage.setItem("todolist", JSON.stringify(state.todoList));
  }
});
function changeNumber() {
  number.value = Math.random(0, 1);
  h1Color.value = number.value > 0.5 ? "purple" : "blue";
}
function changeFull() {
  toggle();
}
function showView(){
  showbtn.value =!showbtn.value
}
</script>

<style scoped>
.underline {
  color: gray;
  text-decoration: line-through;
}
h1 {
  color: v-bind(h1Color);
}
.dog {
  width: 30px;
  height: 30px;
  background-color: bisque;
  animation: move 2s linear infinite;
  position: relative;
}
@keyframes move {
  0% {
    left: 0px;
  }
  50% {
    left: 200px;
  }
  100% {
    left: 0;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s linear;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
