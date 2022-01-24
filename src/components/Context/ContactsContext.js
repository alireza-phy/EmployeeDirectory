import React, {createContext, useEffect, useState} from "react";

export const ContactsContext = createContext({
    contactsList: [], setContactsList: () => {
    }
})


const ContactsContextProvider = ({children}) => {
    const [contactsList , setContactsList] = useState([])
    useEffect(() => {
        fetch('/api/contacts')
            .then(response => response.json())
            .then(data => setContactsList(data.contacts))
    }, []);

    return <ContactsContext.Provider value={{contactsList , setContactsList}}>
            {children}
        </ContactsContext.Provider>
};

export default ContactsContextProvider