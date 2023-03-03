import React from 'react';
import {ILayout} from "../../commons/types/layout";

const LayoutComponent = ({children}:ILayout) => {
    return (
        <>
            {children}
        </>
    );
};

export default LayoutComponent;
