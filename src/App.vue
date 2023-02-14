<template>
  <ul
    flex
    flex-row
    justify-center
    py-6>
    <li px-2><router-link :to="{ name: 'home' }">Home</router-link></li>
    <li px-2><router-link :to="{ name: 'reactive' }">Reactive</router-link></li>
    <li px-2><router-link :to="{ name: 'input' }">ElInput</router-link></li>
  </ul>
  <el-config-provider namespace="ep">
    <div mt-6>
      <router-view />
    </div>
  </el-config-provider>
</template>
