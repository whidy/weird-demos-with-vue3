<template>
  <h1
    text-2xl
    bg-clip-text
    text-transparent
    bg-gradient-to-r
    from-pink-500
    to-violet-500>
    Welcome to here.
  </h1>
  <ul>
    <li>
      see reactive demo please click
      <router-link :to="{ name: 'reactive' }">Reactive Demo</router-link>
    </li>
    <li>
      el-input cannot 连续输入：<router-link :to="{ name: 'input' }">
        ElInput Demo
      </router-link>
    </li>
  </ul>
</template>

<style></style>
