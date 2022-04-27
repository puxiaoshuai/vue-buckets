<script setup></script>

<template>
  <div>
    <div class="left">
      <ul>
        <router-link to="/todo">代办事项</router-link>
        <router-link to="/vuex">测试</router-link>
      </ul>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.left {
  max-width: 200px;
  float: left;
}
ul a{
  display: block;
  max-width: 200px;
  text-decoration: none;
  line-height: 40px;
  height: 40px;
}
.right {
  float: left;
  margin: 20px;
  padding: 40px;
  background-color: rgb(241, 241, 241);
  width:calc(100vw - 260px);
  height: calc(100vh - 40px);
  border-radius:10px;
}
</style>
