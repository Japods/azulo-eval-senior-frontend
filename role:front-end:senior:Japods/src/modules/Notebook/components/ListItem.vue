<script lang="ts" setup>
import { ref, Ref, defineEmits } from "vue";
import { useQuasar } from "quasar";
import { NotebookInterface } from "@/interfaces/NotebookInterface";
import { notebookStore } from "@/modules/Notebook/store/Notebook";
import { useRouter } from "vue-router";

const emit = defineEmits(["refresh"]);
const router = useRouter();
// Store
const userNotebookStore = notebookStore();

const props = defineProps<{
  items: NotebookInterface;
}>();
const $q = useQuasar();

const forDelete = ref([]);

function sureDelete(element: NotebookInterface) {
  $q.dialog({
    dark: false,
    title: "Confirmar",
    message:
      "Al eliminar la libreta tambien eliminaras todas las notas que contiene, estas seguro de eliminarla?",
    cancel: true,
    persistent: true,
  }).onOk(() => {
    deleteNotebook(element);
  });
}

function deleteNotebook(element: NotebookInterface) {
  userNotebookStore.deleteNotebook(element);
  emit("refresh");
  $q.notify("Libreta eliminada exitosamente");
}

function deleteSeveralNotebooks() {
  userNotebookStore.deleteSeveralNotebooks(forDelete.value);
  emit("refresh");
  forDelete.value = [];
  $q.notify("Libreta eliminada exitosamente");
}

function goToNotebook(element: NotebookInterface) {
  router.push({
    name: "NotebookNotes",
    params: { id: element.id },
    query: { name: element.title },
  });
}
</script>

<template>
  <q-list padding class="rounded-borders">
    <q-item
      clickable
      @click="goToNotebook(element)"
      v-ripple
      v-for="(element, index) in items"
      :key="index"
    >
      <q-item-section avatar top>
        <q-avatar icon="folder" color="orange" text-color="white" />
      </q-item-section>

      <q-item-section>
        <q-item-label lines="1">{{ element.title }}</q-item-label>
        <q-item-label caption>March 1st, 2019</q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-checkbox v-model="forDelete" :val="element.id" />
      </q-item-section>
      <q-item-section side>
        <q-icon
          v-if="forDelete.length === 0"
          name="delete"
          @click.prevent.stop="sureDelete(element.id)"
        />
      </q-item-section>
    </q-item>
  </q-list>
  <q-page-sticky
    v-if="forDelete.length > 0"
    position="bottom-right"
    :offset="[350, 80]"
    @click="deleteSeveralNotebooks"
  >
    <q-btn fab icon="delete" color="negative" />
  </q-page-sticky>
</template>