import { configureStore } from '@reduxjs/toolkit'
import notebookReducer from "./notebook.reducer";

export const store = configureStore({
    reducer: {notebookReducer},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch