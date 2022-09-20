<script lang="ts" setup>
const props = defineProps<{
  text: string;
}>();
</script>


<template>
  <div class="empty-state">
    <div align="center">
      <img src="@/assets/images/notebook.svg" alt="" /><br /><br />
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<style setup lang="scss">
.empty-state {
  width: 100%;
  height: calc(100vh - 400px);
  display: grid;
  place-items: center;
}
</style>