import React from "react";

export const Element = ({ attributes, children, element }: any) => {
    const style = { textAlign: element.align }
    switch (element.type) {
        case 'heading-one':
            return (
                <h1 style={style} {...attributes}>
                    {children}
                </h1>
            )
        case 'list-item':
            return (
                <li style={{marginLeft: '40px', ...style}} {...attributes}>
                    {children}
                </li>
            )
        case 'numbered-list':
            return (
                <ol style={style} {...attributes}>
                    {children}
                </ol>
            )
        default:
            return (
                <p style={style} {...attributes}>
                    {children}
                </p>
            )
    }
}