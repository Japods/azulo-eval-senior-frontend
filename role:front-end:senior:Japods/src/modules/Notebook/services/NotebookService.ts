import  { db }  from "../../../firebase.ts"
import { NotebookInterface } from "../../../interfaces/NotebookInterface.js";
import { collection, doc, updateDoc, addDoc, deleteDoc, getDoc, getDocs} from "firebase/firestore";


// Notes Services (Notas de las libretas)

export const getNotebooks = async () => {
    try {
        const getNotes = await collection(db, "notebooks")

        const notemap = getDocs(getNotes).then((response: any) => {
            return  response.docs.map(function(element: any){
                return { id: element.id, ...element.data() }
            });
        })

        return notemap
        
    } catch (error) {
        throw new Error("Error: " + error)
    }
}


export const createNotebook = async (note: NotebookInterface) => {
    try {   
      
      const createNotebook = await addDoc(collection(db, "notebooks"), note)

      return createNotebook

    } catch (error) {
      throw new Error("Error: " + error)
    }
}


export const updateNotebook = async (id: string, note: NotebookInterface) => {
    try{
        const notebookUpdated =  doc(db, "notebooks", id)

        const result = await updateDoc(notebookUpdated, { note });

        return result
    } catch(error) {
        throw new Error("Error: " + error)
    }
}

export const deleteNotebook = async (id: string) => {
    try {
        const notebooks = await deleteDoc(doc(db, "notebooks", id));
        return notebooks
    } catch (error) {
        throw new Error("Error: " + error)
    }
}

export const deleteSeveralNotebooks = async (ids: string[]) => {
    try {

        for (let index = 0; index < ids.length; index++) {
            const notebook = ids[index]
            const deleteNotebook = await deleteDoc(doc(db, "notebooks", notebook));
        }
        
        return "Notas Eliminadas"
    } catch (error) {
        throw new Error("Error: " + error)
    }
}