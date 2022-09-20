import { defineStore } from "pinia";
import { NotesInterface } from "../../../interfaces/NotesInterface";
import { getNotes, createNotes, deleteNote } from "../services/NoteService";

interface State {
  notes: NotesInterface[],
}

export const notesStore = defineStore({
  id: "notesStore",

  state: (): State => ({
    notes: []
  }),

  actions: {
    getNotes(notebook_id: string) {
      getNotes(notebook_id)
        .then((response: any) => {
          this.notes = response
          console.log("Nota creada: ", response);
        })
        .catch((error: any) => {
          console.log("Error en crear nota: ", error);
        });
    },
    createNotes(notebook: NotesInterface) {
      createNotes(notebook)
        .then((response: any) => {
          console.log("Nota creada: ", response);
        })
        .catch((error: any) => {
          console.log("Error en crear Notas: ", error);
        });
    },
    deleteNote(id: string){
      deleteNote(id)
        .then((response: any) => {
          console.log("Nota elimanda: ", response);
        })
        .catch((error: any) => {
          console.log("Error en eliminar nota: ", error);
        });
    },
  },

  getters: {
    getStoreNotes(): NotesInterface{
      return this.notes
    }
  },
});
