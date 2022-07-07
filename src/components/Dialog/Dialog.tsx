import React from 'react';
import styles from './Dialog.module.scss'
import classNames from "classnames";
import OutsideClickHandler from "react-outside-click-handler";

export type PropsDialogType = {
    open: boolean
    setOpen: (open: boolean) => void
}
type PropsType = {
    children: any
}
const Dialog = (props: PropsDialogType & PropsType) => {
    const onOutsideClick = () => props.setOpen(false)
    return (
        <div className={classNames({[styles.dialog]: true, [styles.none]: !props.open})}>
            <OutsideClickHandler onOutsideClick={onOutsideClick}>
                <div className={styles.content}>
                    {props.children}
                </div>
            </OutsideClickHandler>
        </div>
    );
};

export default Dialog;