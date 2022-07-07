import {createNoteParamsType} from "../api/api";

export type noteType = {
    id: number
    title: string
    body: string
    notebook: number
}

export type notebookType = {
    id: number
    title: string
    notes: noteType[]
}

export interface FulfilledAction {
    type: string
    payload: noteType
    meta: {
        requestId: string
        arg: createNoteParamsType
        //requestStatus: string
    }
}
