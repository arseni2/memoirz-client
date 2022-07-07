import React from 'react';

const PlusIcon = (props: {svg_props?: React.SVGProps<SVGSVGElement>, path_props?: React.SVGProps<SVGPathElement>}) => {
    return (
        <svg width={props?.svg_props?.width ?? 17} height={props?.svg_props?.height ?? 17} viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.95652 0.456522C3.95652 0.204392 3.75213 0 3.5 0C3.24787 0 3.04348 0.204392 3.04348 0.456522V3.04348H0.456522C0.204392 3.04348 0 3.24787 0 3.5C0 3.75213 0.204392 3.95652 0.456522 3.95652H3.04348V6.54348C3.04348 6.79561 3.24787 7 3.5 7C3.75213 7 3.95652 6.79561 3.95652 6.54348V3.95652H6.54348C6.79561 3.95652 7 3.75213 7 3.5C7 3.24787 6.79561 3.04348 6.54348 3.04348H3.95652V0.456522Z"
                fill={props?.path_props?.fill ?? "#0374FF"} width={props?.path_props?.width || 17}/>
        </svg>
    );
};

export default PlusIcon;