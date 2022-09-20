<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute();
</script>

<template>
  <h5>
    La página <mark>{{ route.path }}</mark> no existe.
  </h5>
</template>
