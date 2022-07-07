import React from 'react';
import styles from "./Input.module.scss";

const Input = (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    const {className, ...otherProps} = props
    return <input type="text" className={styles.input + ' ' + className} {...otherProps}/>
};

export default Input;