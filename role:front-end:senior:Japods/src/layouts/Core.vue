<script lang="ts" setup>
import { ref } from "vue";
// Props

// showFilter: Show header filter
// showHeaders: show Header Content
// showContent: Show content

const props = defineProps<{
  showFilters: {
    type: boolean;
    required: false;
  };
  showHeaders: { type: boolean; required: false };
  showContent: { type: boolean; required: false };
}>();

</script>

<template>
  <q-layout class="perfect-center">
    <div class="card-notebook">
      <q-page-container>
        <div class="header" v-if="showHeaders">
          <slot name="header"></slot>
        </div>
        <div
          class="filters-container row items-center justify-between"
          v-if="showFilters"
        >
          <slot name="filters"></slot>
        </div>
        <div class="core-content" v-if="showContent">
          <slot name="content"></slot>
        </div>
      </q-page-container>
    </div>
  </q-layout>
</template>

<style lang="scss" scoped>
.card-notebook {
  width: 70%;
  background: #ffffff;
  border-radius: 10px;
  height: calc(100vh - 100px);
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 40px;
  padding-bottom: 40px;
}

.perfect-center {
  display: grid;
  place-items: center;
}

.filters-container {
  margin-top: 20px;
}

.core-content {
  margin-top: 20px;
  height: calc(100vh - 350px);
  overflow: auto;
}
</style>