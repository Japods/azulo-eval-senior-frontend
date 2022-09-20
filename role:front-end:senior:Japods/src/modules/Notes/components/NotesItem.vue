<script lang="ts" setup>
import { defineEmits } from "vue";

import { NotesInterface } from "../../../interfaces/NotesInterface";
import { notesStore } from "@/modules/Notes/store/Notes";
import { useQuasar } from "quasar";

const userNoteStore = notesStore();
const $q = useQuasar();

const props = defineProps<{
  items: NotesInterface;
}>();

const emit = defineEmits(["refresh"]);

function deleteNote(value: NotesInterface) {
  userNoteStore.deleteNote(value);
  emit("refresh");
  $q.notify("Nota eliminada exitosamente");
}
</script>

<template>
  <div class="note-content" v-for="(element, index) in items" :key="index">
    <div class="header-note row items-start justify-between">
      <div class="row">
        <div>
          <img class="image-preview" :src="element.image_preview" alt="" />
        </div>
        <div class="file-note p-10" align="left">
          <div class="title-note p-10">{{ element.title }}</div>
          <div class="p-10 row justify-between items-center">
            <div class="file-note">{{ element.location }}</div>
            <q-btn size="12px" flat dense round icon="place" />
          </div>
          <div class="p-10">
            <img src="@/assets/images/star.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="options">
        <q-btn size="12px" flat dense round icon="more_vert">
          <q-menu>
            <q-list style="min-width: 100px">
              <!-- <q-item clickable @click="editNote(element)" v-close-popup>
                <q-item-section>Editar</q-item-section>
              </q-item> -->
              <q-item clickable @click="deleteNote(element.id)" v-close-popup>
                <q-item-section>Eliminar</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </div>
    <div class="content-note">
      <div v-html="element.body_text"></div>
    </div>
    <div class="carrousel">
      <q-card
        class="my-card"
        v-for="(data, index) in element.images"
        :key="index"
      >
        <img :src="data" width="275" height="175" />
        <q-card-section>
          <div class="item-tag items-center">
            <q-icon size="12px" color="negative" name="place" />
            <div class="file-note">{{ element.location }}</div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.note-content {
  background: #f2f4f5;
  width: 100%;
  height: auto;
  border-radius: 6px;
  padding: 25px;
  margin-top: 20px;
}

.title-note {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
}

.p-10 {
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
}

.content-note {
  margin-top: 20px;
  text-align: justify;
}

.image-preview {
  height: 210px;
  width: 210px;
  border-radius: 20px;
}

.my-card {
  max-width: 200px;
  margin-right: 20px;
}

.carrousel {
  margin-top: 20px;
  padding-bottom: 20px;
  display: flex;
}

.file-note {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.item-tag {
  display: flex;
}
</style>