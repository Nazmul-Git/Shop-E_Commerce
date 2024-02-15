/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext } from 'react';
export const ContextP=createContext(null)
const Context = ({children}) => {
    const contInfo={

    }
    return (
        <ContextP.Provider value={contInfo}>
            {children}
        </ContextP.Provider>
    );
};

export default Context;