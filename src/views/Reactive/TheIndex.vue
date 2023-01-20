<script lang="ts" setup>
import { reactive, ref } from "vue";

const randomNumber = () => Number(Math.random().toString().slice(3, 5));

const a = ref(1);

const state = reactive({
  b: [
    {
      b1: 31,
      b2: 32,
    },
  ],
});

const changeA = () => {
  a.value = randomNumber();
};

const c = reactive({
  a: a, // not a.value
  b: state.b,
});

const d = reactive([
  {
    a: a,
    b: state.b,
  },
]);

const _b = () => [
  {
    b1: randomNumber(),
    b2: randomNumber(),
  },
];

const changeB = () => {
  state.b = _b(); //! danger!!!

  // console.log(state.b === c.b);
  // console.log(state.b === d[0].b);
};

const changeBWithSplice = () => {
  // Array method 1
  state.b.splice(0, state.b.length, ..._b());
  // Array method 2
  // state.b.length = 0;
  // state.b.push(..._b());

  // console.log(state.b === c.b);
  // console.log(state.b === d[0].b);
};
</script>

<template>
  <div flex flex-col items-center>
    <div>
      <p>
        <span text-red>notice:</span> click change A button will change both c
        and d.
      </p>
      <p>
        <span text-red>notice:</span> click change b(First) will change both c
        and d.
      </p>
      <p>
        <span text-red>notice:</span> click change b(Second) will change b only,
        and b(First) won't work again.
      </p>
    </div>
    <br />
    <div>
      <el-button @click="changeA">change a</el-button>
      <el-button @click="changeBWithSplice">First: change b with splice method</el-button>
      <el-button @click="changeB">Second: change b</el-button>
    </div>
    <br />
    <p>a: {{ a }}, b: {{ state.b }}</p>
    <br />
    <!-- <ChildItem :option="b" /> -->
    <p>c: {{ c }}</p>
    <br />
    <p>d: {{ d[0] }}</p>
    <!-- <p><el-button @click="logB">console.log b</el-button></p> -->
    <br />
    <p text-red font-bold>Q: why change b(Second) not work as expect?</p>
    <p text-blue font-bold>
      A: changeB will 改变对象的引用，一旦丢失，无法响应。
    </p>
  </div>
</template>
