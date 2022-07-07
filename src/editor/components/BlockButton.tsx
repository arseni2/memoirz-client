import {useSlate} from "slate-react";
import React, {ReactNode} from "react";
import {isBlockActive, toggleBlock} from "../utils";
import styles from "./EditorMenu.module.scss";

export const BlockButton = ({ format, icon }: { format: string, icon: ReactNode }) => {
    const editor = useSlate()
    const isActive = isBlockActive(
        editor,
        format
    )
    return (
        <div
            className={`${isActive ? styles.menu_item + ' ' + styles.active_icon : styles.menu_item}`}
            onMouseDown={event => {
                event.preventDefault()
                toggleBlock(editor, format)
            }}
        >
            {icon}
        </div>
    )
}