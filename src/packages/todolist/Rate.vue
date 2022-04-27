<template>
  <div>
    {{ rate }}
  </div>
</template>

<script setup>
 import {ref} from 'vue' 
 const props =defineProps({
   value:Number
 })
const rate = "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value);
</script>

<style scoped></style>
