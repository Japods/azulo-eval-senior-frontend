<script lang="ts" setup>
import { ref, Ref, defineEmits } from "vue";

const image_array: Ref<string[] | undefined> = ref([]);
const emit = defineEmits(["getImages"]);

function previewFiles(event: Event) {
  formDataCreate(event);
}

function formDataCreate(event: any) {
  const refFiles: any = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(refFiles);
  reader.onload = () => {
    const readerResult: string | undefined = reader?.result?.toString();
    image_array.value.push(readerResult);
    emit("getImages", image_array);
  };
}
</script>

<template>
  <div class="upload-content flex flex-col mt-5 relative" ref="content">
    <label
      class="c-file-input__label js-file-input__label position-icon"
      for="refFiles2"
    >
      <input
        type="file"
        id="refFiles2"
        ref="refFiles2"
        class="inputfile"
        v-on:change="previewFiles($event)"
      />
    </label>
    <div align="center">
      <q-icon color="teal" size="1rem" name="camera" /><br />
      <div class="info-upload">Agregar</div>
    </div>
  </div>
  <div class="upload-core">
    <div v-for="(element, index) in image_array" :key="index">
      <img class="upload-image" :src="element" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.upload-core {
  display: flex;
  overflow: auto;
  margin-top: 20px;
}
.upload-content {
  height: 80px;
  width: 20%;
  background: #f4f4f4;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 20px;
  position: relative;
}
.upload-image {
  height: 80px;
  width: 80px;
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
}

input[type="file"] {
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;
}

label[for="refFiles2"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.info-upload {
  margin-top: 5px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  /* identical to box height */

  text-align: center;

  /* Fonts Gray */

  color: #585858;
}
</style>