import  { db }  from "../../../firebase.ts"
import { NotesInterface } from "../../../interfaces/NotesInterface.js"
import { collection, getDocs, doc, updateDoc, addDoc, deleteDoc, where, query} from "firebase/firestore";


// Notes Services (Notas de las libretas)

export const getNotes = async (notebook_id: string) => {
    try {

        const q = query(collection(db, "notes"), where("notebook_id", "==", notebook_id));

        const notemap = getDocs(q).then((response: any) => {
            return  response.docs.map(function(element: any){
                return { id: element.id, ...element.data() }
            });
        })

        return notemap
    } catch (error) {
        throw new Error("Error: " + error)
    }
}


export const createNotes = async (note: NotesInterface) => {
    try {   

      const createNote = await addDoc(collection(db, "notes"), note)

      return createNote

    } catch (error) {
      throw new Error("Error: " + error)
    }
}


export const updateNote = async (id: string, note: NotesInterface) => {
    try{
        const noteUpdated =  doc(db, "notes", id)

        const result = await updateDoc(noteUpdated, { note });

        return result
    } catch(error) {
        throw new Error("Error: " + error)
    }
}

export const deleteNote = async (id: string) => {
    try {
        const note = await deleteDoc(doc(db, "notes", id));

        return note
    } catch (error) {
        throw new Error("Error: " + error)
    }
}