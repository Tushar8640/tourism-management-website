import React,{createContext} from 'react';
import useFirebase from '../Hooks/useFirebase';





export const authContext = createContext();
const ContextProvider = ({children}) => {
    
const data = useFirebase();

    return (
        <authContext.Provider value={data}>
            {children}
        </authContext.Provider>
    );
};

export default ContextProvider;