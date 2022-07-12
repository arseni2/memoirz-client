import {RootState} from "./store";

export const getAllNotebooksSelector = (state: RootState) => state.notebookReducer.notebooks
export const getCurrentNoteSelector = (state: RootState) => state.notebookReducer.currentNote
export const getLoadingSelector = (state: RootState) => state.notebookReducer.loading
export const getMenuLoadingSelector = (state: RootState) => state.notebookReducer.menuLoading