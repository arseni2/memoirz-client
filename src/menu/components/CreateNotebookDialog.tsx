import React, {useState} from 'react';
import Dialog, {PropsDialogType} from "../../components/Dialog/Dialog";
import styles from './CreateNotebookDialog.module.scss'
import Input from "../../components/Input/Input";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {createNotebookThunk} from "../../redux/notebook.reducer";


const CreateNotebookDialog = React.memo((props: PropsDialogType) => {
    const dispatch = useDispatch<AppDispatch>()

    const [title, setTitle] = useState('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            dispatch(createNotebookThunk(title))
            props.setOpen(false)
        }
    }
    return (
        <Dialog open={props.open} setOpen={props.setOpen}>
            <h1 className={styles.title}>
                Create notebook
            </h1>
            <Input onKeyDown={onKeyDown} value={title} onChange={onChange}/>
        </Dialog>
    );
})

export default CreateNotebookDialog;