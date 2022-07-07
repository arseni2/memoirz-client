import axios from "axios";
import {notebookType, noteType} from "../redux/types";

const instance = axios.create({
    baseURL: 'http://localhost:7000',
    auth: {password: 'pass', username: 'username'}
})

export const getAllNotebooks = (): Promise<notebookType[]> => {
    return instance.get('/notebook/all').then(data => data.data)
}

export const createNotebook = (title: string): Promise<notebookType> => {
    return instance.post('/notebook/create', {title}).then(data => data.data)
}

export type createNoteParamsType = {
    title: string
    notebook: number
}
export const createNote = (note: createNoteParamsType): Promise<noteType> => {
    const initValue = [
        {
            type: 'paragraph',
            children: [
                {text: 'enter text'},
            ],
        },
    ]
    const body = JSON.stringify(initValue)
    return instance.post('/note/create', {...note, body}).then(data => data.data)
}

export const getNoteDetail = (noteId: string): Promise<noteType> => {
    return instance.get(`/note/detail/${noteId}`).then(data => data.data)
}

export type updateNoteParamsType = {
    noteId: number
    title?: string
    body?: string
}
export const updateNote = (payload: updateNoteParamsType): Promise<noteType> => {
    const {noteId, ...noteFields} = payload
    return instance.patch(`/note/update/${noteId}`, {...noteFields}).then(data => data.data)
}