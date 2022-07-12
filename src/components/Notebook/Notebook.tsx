import React, {useState} from 'react';
import PlusIcon from "../PlusIcon/PlusIcon";
import styles from './Notebook.module.scss'
import CreateNoteDialog from "../../menu/components/CreateNoteDialog";
import {useDispatch} from "react-redux";
import {createNoteThunk} from "../../redux/notebook.reducer";
import {AppDispatch} from "../../redux/store";
import {useNavigate} from "react-router-dom";
import {FulfilledAction} from "../../redux/types";

type propsType = {
    title: string
    id: number
    children: any
}
const Notebook = (props: propsType) => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const [isHoverTitle, setHoverTitle] = useState<null | number>(null)
    const [isCreateNote, setCreateNote] = useState(false)

    const hoverHandler = (id: number) => setHoverTitle(id)
    const hoverOutHandler = () => setHoverTitle(null)
    const createNoteClickHandler = () => setCreateNote(true)
    const onEnter = (title: string) => {
        dispatch(createNoteThunk({
            notebook: props.id,
            title
            // @ts-ignore
        })).then((data: FulfilledAction) => {
            navigate(`${data.payload.id}`)
            setCreateNote(false)
        })
    }

    return (
        <div className={styles.accordion}>
            {isCreateNote && <CreateNoteDialog onEnter={onEnter} setOpen={setCreateNote} open={isCreateNote}/>}
            <div className={styles.accordion_title_container} onMouseEnter={() => hoverHandler(props.id)}
                 onMouseLeave={hoverOutHandler}>
                <p className={styles.accordion_title} style={{color: isHoverTitle === props.id ? '#0374FF' : '#000'}}>
                    {props.title}
                </p>
                <div style={{
                    opacity: isHoverTitle === props.id ? 1 : 0,
                    transition: '.2s opacity',
                    display: 'flex',
                    marginRight: 5
                }} onClick={createNoteClickHandler}>
                    <PlusIcon path_props={{fill: '#000'}} />
                </div>
            </div>
            {props.children}
        </div>
    );
};

export default Notebook;