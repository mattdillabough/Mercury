import React, { useState, createContext } from 'react';

export const AuthUserContext = createContext({});

function AuthUserProvider({children}) {

    const [user, setUser] = useState();

    return (
        <AuthUserContext.Provider value={{user, setUser}}>
            {children}
        </AuthUserContext.Provider>
    );
}

export default AuthUserProvider;