import { ImagesInterface } from "./ImagesInterface";
import { Ref,  } from "vue";

export interface NotesInterface {
    notebook_id?: string | string[];
    title?: Ref<String>;
    location?: Ref<String>;
    geocode?: Ref<String>;
    body_text?: Ref<String>;
    image_preview?: Ref<String>;
    images?: string[]
}