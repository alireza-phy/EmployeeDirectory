import React, {useContext, useState} from "react";
import './ContactContainer.style.css'
import {ContactsContext} from "../Context/ContactsContext";

export const handleStatusColor = (status) => {
    if (status === 'Friend') return {
        backgroundColor: 'green',
        border: '#035c13',
        boxShadow: '0 4px 8px 0 rgb(39, 193, 60), 0 6px 20px 0 rgba(29, 179, 18, 0.14)'
    };
    if (status === 'Colleague') return {
        backgroundColor: '#95c70d',
        border: '#44490c',
        boxShadow: '0 4px 8px 0 rgb(193, 160, 39), 0 6px 20px 0 rgba(179, 163, 18, 0.14)'
    };
    if (status === 'Family') return {backgroundColor: 'red'}
    else return {}
}


const ContactContainer = ({setSingleContact , setShowMode}) => {

    const handleShowInfo = (contact) => {
        setSingleContact(contact)
        setShowMode('showCard')
    }

    const {contactsList} = useContext(ContactsContext)
    const [searchTerm, setSearchTerm] = useState('')

    let FilteredList = contactsList.filter(
        contact =>
            contact.Firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.Lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.Phone.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return (
        <>
            <div className='search_box'>
                <div className='searchIcon'>
                    <i className="bi bi-search"/>
                </div>
                <input type="text" placeholder='Search' onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}/>
            </div>
            {
                (FilteredList.length === 0) ? <p style={{marginTop:'20px' , fontSize:'20px'}}> No results </p> :
                FilteredList.map(item =>
                        <div key={item.id} className='SingleContact'>
                            <img onClick={()=>handleShowInfo(item)} src={`https://i.pravatar.cc/150?img=${item.id%11+1}`} alt="avatar"/>
                            <div className='ContactInfo'>
                                <h4>
                                    {item.Firstname}
                                </h4>
                                <div className='status-style' style={handleStatusColor(item.Status)}>
                                    {item.Status}
                                </div>
                            </div>
                            <div className='contact-icons'>
                                <i className="bi bi-telephone-plus call-icon"/>
                                <i className="bi bi-envelope-plus message-icon"/>
                            </div>
                        </div>
                )
            }
        </>
    )
}

export default ContactContainer