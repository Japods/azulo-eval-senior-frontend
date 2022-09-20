<script lang="ts" setup>
import { RouterView } from "vue-router";
import { platformStore } from "./store/Platform";

const usePlatformStore = platformStore();


onMounted(() => {
  usePlatformStore.getConfig();
});
</script>
  
<template>
  <div class="container">
    <RouterView />
  </div>
</template>
  
<style lang="scss">
@import "./assets/styles/fonts.scss";

.container {
  height: 100vh;
  width: 100%;
  background: #fafafa;
}
</style>
  