<template>
  <div class="main">
    <div>
      <input type="text" v-model="userName.oneName" />
      <input type="text" v-model="userName.twoName" />
    </div>
    <h1>计算属性</h1>
    <div>
      <input type="text" v-model="changeOneName" />
    </div>
  </div>
</template>

<script>
import { message } from 'ant-design-vue';
import { computed, reactive } from "vue";
export default {
  setup() {
    const userName = reactive({
      oneName: "张荣寒",
      twoName: "李月"
    });
    // vue3中计算属性的函数中如果只传入一个回调函数，表示的是get
    const changeOneName = computed({
      get() {
        console.log("触发");
        return userName.oneName;
      },
      set(val) {
        console.log(val);
        let name = val.split("_");
        userName.oneName = name;
      },
    });
    return {
      userName,
      changeOneName
    };
  }
};
</script>
