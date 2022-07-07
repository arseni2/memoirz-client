import React, {useEffect, useState} from 'react';
import styles from './Menu.module.scss'
import PlusIcon from "../components/PlusIcon/PlusIcon";
import CreateNotebookDialog from "./components/CreateNotebookDialog";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../redux/store";
import {getAllNotebooksThunk} from "../redux/notebook.reducer";
import {getAllNotebooksSelector} from "../redux/selectors";
import Notebook from "../components/Notebook/Notebook";
import Note from "../components/Note/Note";

const Menu = () => {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(getAllNotebooksThunk())
        // eslint-disable-next-line
    }, [])

    const [isCreateNotebook, setCreateNotebook] = useState(false)

    const createNotebookClickHandler = () => setCreateNotebook(true)

    const notebooks = useSelector(getAllNotebooksSelector)
    return (
        <div className={styles.menu}>
            <div className={styles.create_notebook}>
                <PlusIcon/>
                <p className={styles.create_notebook_txt} onClick={createNotebookClickHandler}>
                    create notebook
                </p>
            </div>
            {isCreateNotebook && <CreateNotebookDialog setOpen={setCreateNotebook} open={isCreateNotebook}/>}
            {notebooks.map((notebook, i) => {
                return <Notebook id={notebook.id} title={notebook.title} key={i}>
                    {notebook.notes && notebook.notes.map((note, i) => {
                        return  <Note key={i} id={note.id} title={note.title}/>
                    })}
                </Notebook>
            })}
        </div>
    );
};

export default Menu;