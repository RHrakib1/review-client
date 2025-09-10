import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { createContext, useState } from 'react'
import auth from '../Firebase/Firebase.config'


export const Authcontextprovider = createContext()
export default function Authprovider({ children }) {
    const [user, setuser] = useState(null)


    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const datainfo = {
        user,
        createuser
    }
    return (
        <Authcontextprovider.Provider value={datainfo}>
            {children}
        </Authcontextprovider.Provider>
    )
}
