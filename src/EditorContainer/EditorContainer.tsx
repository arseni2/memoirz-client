import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../redux/store";
import {useParams} from "react-router-dom";
import {getNoteDetailThunk} from "../redux/notebook.reducer";
import {getCurrentNoteSelector, getLoadingSelector} from "../redux/selectors";
import Editor from "../editor/Editor";

const EditorContainer = () => {
    const dispatch = useDispatch<AppDispatch>()
    let {noteId} = useParams<{ noteId: string }>();
    useEffect(() => {
        if (noteId) {
            dispatch(getNoteDetailThunk(noteId))
        }
        // eslint-disable-next-line
    }, [noteId])
    const currentNote = useSelector(getCurrentNoteSelector)
    const loading = useSelector(getLoadingSelector)
    return (
        <div style={{flexBasis: '100%'}}>
            {!loading && currentNote ?
                <Editor body={JSON.parse(currentNote.body)} title={currentNote.title}
                        id={currentNote.id}/> : <h2>loading...</h2>}
        </div>
    );
};

export default EditorContainer;