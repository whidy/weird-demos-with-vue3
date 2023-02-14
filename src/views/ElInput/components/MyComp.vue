<template>
  <div>
    <p>这个输入框你一次就只能输入一个字符串，然后就跳出来了。</p>
    <div v-for="item in config" :key="modelValue[item.keyName]">
      <el-input v-model="modelValue[item.keyName]" />
    </div>
  </div>
  <br />
  <div>
    <p>然而这个就非常棒棒了。</p>
    <div v-for="item in config" :key="item.keyName">
      <el-input v-model="modelValue[item.keyName]" />
    </div>
  </div>
  <p>---{{ modelValue }}---</p>
  <br />
  <p text-red font-bold>Q: 为什么第一个无法连续输入，按一次就blur?</p>
  <p text-blue font-bold>A: 关键在于v-for中的key</p>
  <p text-green-700 font-bold>
    So: 请不要在v-for中的key跟双向数据绑定的modelValue关联起来。
  </p>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
interface ConfigItem {
  elCompName: string;
  keyName: string;
}

const props = defineProps({
  config: {
    type: Array as PropType<ConfigItem[]>,
    default: () => [],
  },
  modelValue: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped></style>
