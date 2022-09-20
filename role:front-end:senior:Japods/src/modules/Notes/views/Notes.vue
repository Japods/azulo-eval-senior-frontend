<script lang="ts" setup>
import { ref, Ref } from "vue";
import CoreLayout from "@/layouts/Core.vue";
import NotesItem from "@/modules/Notes/components/NotesItem.vue";
import CreateNote from "@/modules/Notes/components/CreateNote.vue";
import { useRouter, useRoute } from "vue-router";
import { notesStore } from "@/modules/Notes/store/Notes";
import EmptyState from "@/views/EmptyState.vue";

const userNoteStore = notesStore();
const router = useRouter();
const route = useRoute();
const openDialog = ref(false);

onMounted(() => {
  getNotes();
});

function goBack() {
  router.go(-1);
}

function openCreate() {
  openDialog.value = !openDialog.value;
}

function getNotes() {
  userNoteStore.getNotes(route.params.id);
}
</script>
    
<template>
  <CoreLayout :showHeaders="true" :showFilters="false" :showContent="true">
    <template v-slot:header>
      <div class="row justify-between items-center">
        <div class="row items-center">
          <img src="@/assets/images/logo.svg" alt="" />
          <div class="subtitle-travel ml-2">{{ route.query.name }}</div>
        </div>
        <div class="text-back" @click="goBack">Volver a libretas</div>
      </div>
    </template>
    <template v-slot:content>
      <EmptyState
        :text="'Aun no se han añadido notas a esta libreta'"
        v-if="userNoteStore.getStoreNotes.length === 0"
      ></EmptyState>
      <NotesItem
        v-else
        @refresh="getNotes"
        :items="userNoteStore.getStoreNotes"
      ></NotesItem>
      <q-page-sticky position="bottom-right" :offset="[280, 80]">
        <q-btn @click="openCreate" fab icon="add" color="primary" />
      </q-page-sticky>
    </template>
  </CoreLayout>
  <CreateNote
    :openDialog="openDialog"
    @closeDialog="openCreate"
    @refresh="getNotes"
  >
  </CreateNote>
</template>
    
<style scoped lang="scss">
.subtitle-travel {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-align: center;

  color: #232323;
}

.text-back {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  color: #0091ad;
  cursor: pointer;
}

.ml-2 {
  margin-left: 20px;
}
</style>