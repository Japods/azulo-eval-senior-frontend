import { defineStore } from "pinia";
import { NotebookInterface } from "../../../interfaces/NotebookInterface";
import { getNotebooks,
  createNotebook,
  updateNotebook,
  deleteNotebook, deleteSeveralNotebooks } from "../../Notebook/services/NotebookService";

interface State {
  notebooks: NotebookInterface[],
  notebook_selected: NotebookInterface 
}

export const notebookStore = defineStore({
  id: "notebookStore",

  state: (): State => ({
    notebooks: [],
    notebook_selected: {
        id: 0, 
        title: "", 
        image_preview: "", 
        notes: [],
    }
  }),
  actions: {
    getAll(){
      getNotebooks()
        .then((response: any) => {
          this.notebooks = response
        })
        .catch((error: any) => {
        });
    },
    createNotebook(notebook: NotebookInterface) {
      createNotebook(notebook)
        .then((response: any) => {
          console.log("Notebook creada: ", response);
        })
        .catch((error: any) => {
          console.log("Error en crear notebooks: ", error);
        });
    },
    updateNotebook(id: string, notebook: NotebookInterface){
      updateNotebook(id, notebook)
        .then((response: any) => {
          console.log("Notebook editada: ", response);
        })
        .catch((error: any) => {
          console.log("Error en editar notebooks: ", error);
        });
    },
    deleteNotebook(id: string){
      deleteNotebook(id)
        .then((response: any) => {
          console.log("Notebook elimanda: ", response);
        })
        .catch((error: any) => {
          console.log("Error en eliminar notebooks: ", error);
        });
    },
    deleteSeveralNotebooks(ids: string[]){
      deleteSeveralNotebooks(ids)
        .then((response: any) => {
          console.log("Notebook elimanda: ", response);
        })
        .catch((error: any) => {
          console.log("Error en eliminar notebooks: ", error);
        });
    },
  },

  getters: {
    getStoreNotebook(): NotebookInterface{
      return this.notebooks
    }
  },
});
