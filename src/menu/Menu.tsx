import React, {useEffect, useState} from 'react';
import styles from './Menu.module.scss'
import PlusIcon from "../components/PlusIcon/PlusIcon";
import CreateNotebookDialog from "./components/CreateNotebookDialog";
import {useDispatch, useSelector} from "react-redux";
import {getAllNotebooksSelector, getMenuLoadingSelector} from "../redux/selectors";
import Notebook from "../components/Notebook/Notebook";
import Note from "../components/Note/Note";
import {AppDispatch} from "../redux/store";
import {getAllNotebooksThunk} from "../redux/notebook.reducer";
import Loader from "../components/Loader/Loader";

const Menu = () => {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(getAllNotebooksThunk())
        // eslint-disable-next-line
    }, [])

    const [isCreateNotebook, setCreateNotebook] = useState(false)

    const createNotebookClickHandler = () => setCreateNotebook(true)

    const notebooks = useSelector(getAllNotebooksSelector)
    const menuLoading = useSelector(getMenuLoadingSelector)
    return (
        <div className={styles.menu}>
            <div className={styles.create_notebook}>
                <PlusIcon/>
                <p className={styles.create_notebook_txt} onClick={createNotebookClickHandler}>
                    create notebook
                </p>
            </div>
            {isCreateNotebook && <CreateNotebookDialog setOpen={setCreateNotebook} open={isCreateNotebook}/>}
            {menuLoading
                ? <Loader />
                : notebooks.map((notebook, i) => {
                        return <Notebook id={notebook.id} title={notebook.title} key={i}>
                            {notebook.notes && notebook.notes.map((note, i) => {
                                return  <Note key={i} id={note.id} title={note.title}/>
                            })}
                        </Notebook>
                    })
            }
        </div>
    );
};

export default Menu;