<script lang="ts" setup>
import { ref, Ref, defineEmits, onMounted } from "vue";
import { NotesInterface } from "../../../interfaces/NotesInterface";
import UploadMultipleVue from "./UploadMultiple.vue";
import { notesStore } from "@/modules/Notes/store/Notes";
import { useRoute } from "vue-router";
import { useQuasar } from "quasar";
import { usePlacesAutocomplete, getGeocode } from "v-use-places-autocomplete";

const route = useRoute();
const userNoteStore = notesStore();
const $q = useQuasar();
const editor: Ref<String> = ref("");
const title: Ref<String> = ref("");
const geocode: Ref<String> = ref("");
const addressInput = ref(null);
const fileName: Ref<String> = ref("");
const imageUrl: Ref<String> = ref("");
const imageArray: Ref<string[] | undefined> = ref([]);

const query = ref("");
const { suggestions } = usePlacesAutocomplete(query, {
  debounce: 500,
  minLengthAutocomplete: 3,
});

const props = defineProps<{
  openDialog: false;
}>();

const emit = defineEmits(["refresh", "closeDialog"]);

function createNote() {
  const note: NotesInterface = {
    notebook_id: route.params.id,
    title: title.value,
    body_text: editor.value,
    image_preview: imageUrl.value,
    location: query.value,
    geocode: geocode.value,
    images: imageArray.value,
  };

  userNoteStore.createNotes(note);
  $q.notify("Nota añadida exitosamente");
  emit("closeDialog");
  emit("refresh");
  resetVars();
}

function resetVars() {
  title.value = "";
  editor.value = "";
  geocode.value = "";
  query.value = "";
  imageUrl.value = "";
}

function getCode(value: any) {
  query.value = value.description;

  const parameter: any = {
    placeId: value.place_id,
  };

  getGeocode(parameter).then((response: any) => {
    geocode.value = response[0].plus_code.global_code;
  });
}

function previewFiles(event: Event) {
  formDataCreate(event);
}

function formDataCreate(event: any) {
  const refFiles: any = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(refFiles);
  reader.onload = () => {
    const readerResult: string | undefined = reader?.result?.toString();
    imageUrl.value = readerResult;
  };
}

function getImages(event: any) {
  imageArray.value = event.value;
}
</script>
    
<template>
  <q-dialog v-model="props.openDialog">
    <q-card style="width: 700px; max-width: 80vw">
      <q-card-section>
        <div class="text-h6">Crear nota</div>
      </q-card-section>
      <q-card-section>
        <div class="row items-start">
          <img class="image-preview" v-if="imageUrl" :src="imageUrl" alt="" />
          <div
            v-else
            class="upload-content flex flex-col mt-5 relative"
            ref="content"
          >
            <label
              class="c-file-input__label js-file-input__label position-icon"
              for="refFiles"
            >
              <input
                type="file"
                id="refFiles"
                ref="refFiles"
                class="inputfile"
                v-on:change="previewFiles($event)"
              />
            </label>
            <div align="center">
              <q-icon color="teal" size="2rem" name="camera" /><br />
              <div class="info-upload">Agregar</div>
            </div>
          </div>
          <div class="information-note">
            <q-input
              v-model="title"
              label="Titulo de la nota"
              :rules="[(val) => !!val || 'Campo requerido']"
            />
            <q-input
              v-model="query"
              label="Buscar Geolocalizacion"
              :rules="[(val) => !!val || 'Campo requerido']"
            />
            <div class="menu" v-if="suggestions.length > 1">
              <q-item
                @click="getCode(item)"
                clickable
                v-ripple
                v-for="item in suggestions"
                :key="item.place_id"
              >
                <q-item-section avatar>
                  <q-icon color="teal" name="places" />
                </q-item-section>
                <q-item-section>{{ item.description }}</q-item-section>
              </q-item>
            </div>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-editor
          v-model="editor"
          placeholder="Escribir nota aqui"
          min-height="10rem"
        />
      </q-card-section>
      <q-card-section>
        <UploadMultipleVue @getImages="getImages" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          flat
          label="Cancelar"
          color="primary"
          @click="
            emit('closeDialog');
            resetVars();
          "
        />
        <q-btn
          flat
          label="Guardar nota"
          color="primary"
          @click="createNote"
          :disable="
            title == '' ||
            editor == '' ||
            query == '' ||
            imageUrl == ''
          "
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>



<style scoped lang="scss">
.information-note {
  margin-right: 20px;
  width: 300px;
}

.mt-10 {
  margin-top: 20px;
}

.upload-content {
  height: 210px;
  width: 40%;
  background: #f4f4f4;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 20px;
}

.image-preview {
  height: 210px;
  width: 40%;
  margin-right: 20px;
}

input[type="file"] {
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;
}

label[for="refFiles"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>