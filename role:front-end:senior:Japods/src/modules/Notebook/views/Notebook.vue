<script lang="ts" setup>
import { ref, Ref } from "vue";
import { useQuasar } from "quasar";
import ListItem from "@/modules/Notebook/components/ListItem.vue";
import EmptyState from "../../../views/EmptyState.vue";
import CreateDialog from "@/modules/Notebook/components/CreateNotebook.vue";
import CoreLayout from "@/layouts/Core.vue";
import { NotebookInterface } from "@/interfaces/NotebookInterface";
import { notebookStore } from "@/modules/Notebook/store/Notebook";
import { platformStore } from "../../../store/Platform";

const usePlatformStore = platformStore();
// Store
const userNotebookStore = notebookStore();
const $q = useQuasar();
// Variables
const openDialog = ref(false);

onMounted(() => {
  getNotebook();
});

function openCreate() {
  openDialog.value = !openDialog.value;
}

function getNotebook() {
  userNotebookStore.getAll();
}

function createNotebook(title: string) {
  if (title === "") {
    return;
  }

  const notebook: NotebookInterface = {
    title: title,
  };

  userNotebookStore.createNotebook(notebook);
  $q.notify("Libreta creada exitosamente");
  getNotebook();
  openDialog.value = false;
}
</script>
    
<template>
  <CoreLayout :showHeaders="true" :showFilters="true" :showContent="true">
    <template v-slot:header>
      <div class="row justify-between items-center">
        <div>
          <img :src="usePlatformStore.getConfigPlatform.logo" alt="" />
        </div>
        <div class="title-travel">
          {{ usePlatformStore.getConfigPlatform.name_app }}
        </div>
        <div></div>
      </div>
    </template>
    <template v-slot:filters>
      <div class="subtitle-travel">Libretas</div>
      <div class="search-container">
        <q-input
          v-model:search="search"
          outlined
          :dense="false"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </template>
    <template v-slot:content>
      <EmptyState
        :text="'Aun no se han añadido libretas'"
        v-if="userNotebookStore.getStoreNotebook.length === 0"
      ></EmptyState>
      <ListItem
        v-else
        @refresh="getNotebook"
        :items="userNotebookStore.getStoreNotebook"
      ></ListItem>
      <q-page-sticky position="bottom-right" :offset="[280, 80]">
        <q-btn @click="openCreate" fab icon="add" color="primary" />
      </q-page-sticky>
    </template>
  </CoreLayout>
  <CreateDialog
    :openDialog="openDialog"
    @closeDialog="openCreate"
    @createNotebook="createNotebook"
  ></CreateDialog>
</template>


<style lang="scss" scoped>
.title-travel {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #655d5d;
}

.subtitle-travel {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-align: center;

  color: #232323;
}
</style>
    