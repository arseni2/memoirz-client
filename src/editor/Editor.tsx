import React, {useCallback, useEffect, useMemo, useState} from 'react';
import styles from './Editor.module.scss'
import {Editable, ReactEditor, Slate, withReact} from "slate-react";
import {withHistory} from 'slate-history'
import {createEditor, Descendant} from 'slate'
import EditorMenu from "./components/EditorMenu";
import {Leaf} from "./components/Leaf";
import {Element} from "./components/Element";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";
import {updateNoteThunk} from "../redux/notebook.reducer";
import {useDebounce} from "./utils";

type propsType = {
    title: string
    body: Descendant[]
    id: number
}
const EditorComponent = (props: propsType) => {
    const dispatch = useDispatch<AppDispatch>()

    const renderElement = useCallback((props: any) => <Element {...props} />, [])
    const renderLeaf = useCallback((props: any) => <Leaf {...props} />, [])
    const editor = useMemo(() => withHistory(withReact(createEditor() as ReactEditor)), [])

    const [title, setTitle] = useState(props.title)
    const [editorValue, setEditorValue] = useState<Descendant[]>(props.body)
    const titleDebounced = useDebounce(title, 400)
    const editorValueDebounced = useDebounce(editorValue, 400)

    console.log('rerender editor')

    const updateNote = () => {
        dispatch(updateNoteThunk({
            body: JSON.stringify(editorValue),
            noteId: props.id,
            title
        }))
    }

    const onChange = useCallback((value: Descendant[]) => {
        setEditorValue(value)
    }, [])

    const onChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    },[])

    useEffect(() => {
        if(editorValue !== props.body || title !== props.title) {
            updateNote()
        }
        //eslint-disable-next-line
    }, [editorValueDebounced, titleDebounced])
    return (
        <div className={styles.editor}>
            <Slate editor={editor} value={editorValue} onChange={onChange}>
                <EditorMenu/>
                <input className={styles.inputTitle} value={title} onChange={onChangeTitle} />
                <Editable
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    placeholder="Enter text"
                    spellCheck
                    autoFocus
                    className={styles.editorForm}
                />
            </Slate>
        </div>
    );
};

export default EditorComponent;