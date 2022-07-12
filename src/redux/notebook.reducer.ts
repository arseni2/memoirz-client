import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {notebookType, noteType} from "./types";
import {
    createNote,
    createNotebook,
    createNoteParamsType,
    getAllNotebooks,
    getNoteDetail, updateNote,
    updateNoteParamsType
} from "../api/api";

type initialStateType = {
    notebooks: Array<notebookType>
    loading: boolean
    currentNote: null | noteType
    menuLoading: boolean
}
export const getAllNotebooksThunk = createAsyncThunk(
    'getAllNotebooksThunk',
    () => {
        return getAllNotebooks()
    }
)
export const createNotebookThunk = createAsyncThunk(
    'createNotebookThunk',
    (title: string) => {
        return createNotebook(title)
    }
)
export const createNoteThunk = createAsyncThunk<noteType, createNoteParamsType>(
    'createNoteThunk',
    (payload: createNoteParamsType, thunkAPI) => {
        return createNote(payload)
    }
)
export const getNoteDetailThunk = createAsyncThunk(
    'getNoteDetailThunk',
    (noteId: string) => {
        return getNoteDetail(noteId)
    }
)

export const updateNoteThunk = createAsyncThunk(
    'updateNoteThunk',
    (payload: updateNoteParamsType) => {
        return updateNote(payload)
    }
)

const initialState: initialStateType = {
    notebooks: [],
    loading: true,
    currentNote: null,
    menuLoading: true
}
const notebookSlice = createSlice({
    name: 'notebook',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllNotebooksThunk.fulfilled.type]: (state, action: PayloadAction<Array<notebookType>>) => {
            state.notebooks = action.payload
            state.menuLoading = false
        },
        [createNotebookThunk.fulfilled.type]: (state, action: PayloadAction<notebookType>) => {
            state.notebooks.push(action.payload)
        },
        [createNoteThunk.fulfilled.type]: (state, action: PayloadAction<noteType>) => {
            if (state.notebooks.length === 1) {
                state.notebooks[0].notes.push(action.payload)
            } else {
                let notebook = state.notebooks.find((item) => item.id === action.payload.notebook)
                let index = state.notebooks.indexOf(notebook as notebookType)
                notebook?.notes.push(action.payload)
                state.notebooks.fill(notebook as notebookType, index, index++);
            }
        },
        [getNoteDetailThunk.fulfilled.type]: (state, action: PayloadAction<noteType>) => {
            state.currentNote = action.payload
            state.loading = false
        },
        [getNoteDetailThunk.pending.type]: (state) => {
            state.loading = true
        }
    }
})

export default notebookSlice.reducer