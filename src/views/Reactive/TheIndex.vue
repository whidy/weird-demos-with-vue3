<script lang="ts" setup>
import { reactive } from "vue";
const a = reactive([
  {
    val: 1,
    title: "1",
  },
]);

const b = reactive({
  b2: a,
  b3: [
    {
      b31: 31,
      b32: 32,
    },
  ],
  b4: [
    {
      b41: 41,
      b42: 42,
    },
  ],
});

const d = reactive([
  {
    d2: b.b2,
    b3_b4: {
      b3: b.b3,
      b4: b.b4,
    },
  },
]);

const randomNumber = () => Number(Math.random().toString().slice(3, 5));

const changeB2 = () => {
  a[0].val = randomNumber();
};

const changeB3 = () => {
  b.b3 = [
    {
      b31: randomNumber(),
      b32: randomNumber(),
    },
  ];
};

const changeB4WithCWithSplice = () => {
  b.b4.splice(
    0,
    b.b4.length,
    ...[
      {
        b41: randomNumber(),
        b42: randomNumber(),
      },
    ]
  );
};

</script>

<template>
  <div flex flex-col items-center>
    <div>
      <p>
        <span text-red>notice:</span> click change b2 button will change both
        b.b2 and d.title.
      </p>
      <p>
        <span text-red>notice:</span> click change b3 will only change b not d
        both b and d.
      </p>
      <p>
        <span text-red>notice:</span> click change b4... will change both b and
        d
      </p>
    </div>
    <br />
    <div>
      <el-button @click="changeB2">change b2</el-button>
      <el-button @click="changeB3">change b3</el-button>
      <!-- <el-button @click="changeB3WithC">change b3 with c</el-button> -->
      <el-button @click="changeB4WithCWithSplice">change b4 with c with splice method</el-button>
    </div>
    <br />
    <!-- <ChildItem :option="b" /> -->
    <p>b[0]: {{ b }}</p>
    <br />
    <p>d[0]: {{ d[0] }}</p>
    <!-- <p><el-button @click="logB">console.log b</el-button></p> -->
    <br />
    <p text-red font-bold>Q: why change b3 not work as expect?</p>
  </div>
</template>
