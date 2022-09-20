import { NotesInterface } from "./NotesInterface";

export interface NotebookInterface {
    id?: Number;
    title: String;
    image_preview?: String;
    notes?: NotesInterface[]
}