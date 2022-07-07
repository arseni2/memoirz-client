import {useSlate} from "slate-react";
import React, {ReactNode} from "react";
import {isMarkActive, toggleMark} from "../utils";
import styles from './EditorMenu.module.scss'
import {Editor} from "slate";

export const MarkButton = ({ format, icon }: { format: string, icon: ReactNode }) => {
    const editor: Editor = useSlate()
    const isActive = isMarkActive(editor, format)
    return (
        <div
            onMouseDown={event => {
                event.preventDefault()
                toggleMark(editor, format)
            }}
            className={`${isActive ? styles.menu_item + ' ' + styles.active_icon : styles.menu_item}`}
        >
            {icon}
        </div>
    )
}