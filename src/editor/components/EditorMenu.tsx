import React from 'react';
import styles from './EditorMenu.module.scss'
import BoldIcon from "../../components/BoldIcon/BoldIcon";
import ItalicIcon from "../../components/ItalicIcon/ItalicIcon";
import HeadingIcon from "../../components/HeadingIcon/HeadingIcon";
import ListIcon from "../../components/ListIcon/ListIcon";
import {MarkButton} from "./MarkButton";
import {BlockButton} from "./BlockButton";

const EditorMenu = () => {
    return (
        <div className={styles.menu}>
            <MarkButton format="bold" icon={<BoldIcon/>}/>
            <MarkButton format="italic" icon={<ItalicIcon/>}/>
            <BlockButton format="heading-one" icon={<HeadingIcon/>}/>
            <BlockButton format="numbered-list" icon={<ListIcon/>}/>
        </div>
    );
};

export default EditorMenu;

