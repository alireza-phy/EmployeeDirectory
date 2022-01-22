import React, {useState} from 'react';
import './ContactsPage.style.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import {useContext} from "react";
import {ContactsContext} from "../Context/ContactsContext";
import ContactContainer from "../ContactContainer/ContactContainer";
import InfoCard from "../InfoCard/InfoCard";
import NewContact from "../NewContact/NewContact";

const ContactsPage = () => {

    const handleNewContact = () => {
        setShowMode('newCard')
        setSingleContact({
            Firstname: '',
            Lastname: '',
            Status: '',
            Phone: '',
            Email: '',
            DOB: ''
        })
    }

    const [SingleContact, setSingleContact] = useState({
        id: 1,
        Firstname: '',
        Lastname: '',
        Status: '',
        Phone: '',
        Email: '',
        DOB: ''
    })

    const {contactsList} = useContext(ContactsContext)

    const [showMode, setShowMode] = useState('')

    return (
            <div className='MainContainer'>
                <div className='Container'>
                    <div className='ContactHeader'>
                        <i onClick={handleNewContact} className="bi bi-plus-circle-fill add-btn"/>
                        <h1> Contacts </h1>
                        <p> {contactsList.length} contacts </p>

                    </div>
                    <div className='Contacts'>
                        <ContactContainer
                            setSingleContact={setSingleContact}
                            setShowMode={setShowMode}
                        />
                    </div>

                </div>
                <div>
                    {(showMode === 'showCard') && <InfoCard
                        SingleContact={SingleContact}
                        showMode={showMode}
                        setShowMode={setShowMode}
                        setSingleContact={setSingleContact}
                    />}
                        {(showMode === 'newCard') && <NewContact
                            SingleContact={SingleContact}
                            showMode={showMode}
                            setShowMode={setShowMode}
                            setSingleContact={setSingleContact}
                        />}
                </div>
            </div>

    )
}

export default ContactsPage