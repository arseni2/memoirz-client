import React from 'react';
import styles from './Note.module.scss'
import {useNavigate} from "react-router-dom";

type propsType = {
    title: string
    id: number
}
const Note = (props: propsType) => {
    const navigate = useNavigate()
    return <p onClick={() => navigate(`${props.id}`)} className={styles.accordion_note}>{props.title}</p>
};

export default Note;