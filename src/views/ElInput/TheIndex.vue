<script lang="ts" setup>
import { reactive, toRefs } from "vue";
import MyComp from "./components/MyComp.vue";

const state = reactive({
  data: {
    text: "Hello World",
  },
  config: [
    {
      elCompName: "el-input",
      keyName: "text",
    },
  ],
});

const { data, config } = toRefs(state);
</script>

<template>
  <div>
    <my-comp v-model="data" :config="config" />
  </div>
</template>
