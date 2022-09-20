<script lang="ts" setup>
import { ref, Ref, defineEmits } from "vue";

const text = ref("");

const props = defineProps<{
  openDialog: false;
}>();

const emit = defineEmits(["createNotebook", "closeDialog"]);

function createNotebook() {
  emit("createNotebook", text.value);
  text.value = "";
}
</script>

<template>
  <q-dialog v-model="props.openDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">Crear libreta</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Aqui podras crear una libreta donde puedes guardar notas de viajes,
        localizaciones, imagenes con su repectiva localizacion y mucho mas
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          v-model="text"
          label="Nombre de la libreta"
          :rules="[(val) => !!val || 'Campo requerido']"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          label="Cancelar"
          color="primary"
          @click="emit('closeDialog')"
        />
        <q-btn
          flat
          label="Guardar libreta"
          color="primary"
          @click="createNotebook"
          :disable="text === ''"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>