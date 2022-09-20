import  { db }  from "../firebase"
import { PlatformInterface } from "../interfaces/PlatformInterface";
import { collection, getDocs} from "firebase/firestore";


// Notes Services (Notas de las libretas)

export const getPlatformConfig = async () => {
    try {
        const getNotes = await collection(db, "config")

        const config = getDocs(getNotes).then((response: any) => {
            return  response.docs.map(function(element: any){
                return { id: element.id, ...element.data() }
            });
        })

        return config
        
    } catch (error) {
        throw new Error("Error: " + error)
    }
}
