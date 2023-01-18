<script lang="ts" setup>
import { reactive } from "vue";
import ChildItem from "./components/ChildItem.vue";
const a = reactive([
  {
    val: 1,
    title: "1",
  },
  {
    val: 2,
    title: "2",
  },
]);

const b = reactive({
  b1: 1,
  b2: a,
  b3: [
    {
      b31: 31,
      b32: 32,
    },
  ],
});

const changeA0 = () => {
  a[0].val = 3;
};

const changeB3 = () => {
  b.b3 = [1];
};

const logB = () => {
  console.log(b);
};
</script>

<template>
  <el-button @click="changeA0">change b.d</el-button>
  <el-button @click="changeB3">change b3</el-button>
  <el-button @click="logB">console.log b</el-button>
  <ChildItem :option="b" />
</template>
