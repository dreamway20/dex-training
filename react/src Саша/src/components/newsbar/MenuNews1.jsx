import React from "react";
import { News } from "./News";


export function MenuNews({active, children, ...restProps}) {
    const className=`news ${active == 1 ? 'active' : ''}`;

    return (
        <a className={className}{...restProps}>
            {children}
        </a>
    )
}