import React, {useContext} from "react";
import phone from './images/icons8-phone-48.png'
import status from './images/icons8-team-48.png'
import firstname from './images/icons8-user-48.png'
import lastname from './images/icons8-user-48 (2).png'
import calender from './images/icons8-event-48.png'
import mail from './images/icons8-mail-48.png'
import './EditCard.style.css'
import {ContactsContext} from "../Context/ContactsContext";

const EditCard = ({SingleContact, setSingleContact, editShow, setEditShow}) => {

    const {contactsList, setContactsList} = useContext(ContactsContext)


    const handlechangeItem = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setSingleContact({...SingleContact, [name]: value})
    }

    const handleSubmitChanges = () => {
        setContactsList(contactsList.map(contact => (contact.id === SingleContact.id) ? {...contact, ...SingleContact} : contact))
        setEditShow(false)
    }

    return (
        (editShow) &&
        <div className='Edit-Card'>
            <h4> edit fields and choose save button</h4>
            <div className='Edit-Card-Row'>
                <div className='Edit-Card-Item'>
                    <img src={firstname} alt="phone icon"/>
                    <p> firstname: </p>
                </div>
                <input onChange={handlechangeItem} name='Firstname' value={SingleContact.Firstname} type="text"/>
            </div>
            <div className='Edit-Card-Row'>
                <div className='Edit-Card-Item'>
                    <img src={lastname} alt="phone icon"/>
                    <p> lastname: </p>
                </div>
                <input onChange={handlechangeItem} name='Lastname' value={SingleContact.Lastname} type="text"/>
            </div>
            <div className='Edit-Card-Row'>
                <div className='Edit-Card-Item'>
                    <img src={status} alt="phone icon"/>
                    <p> status: </p>
                </div>
                <input onChange={handlechangeItem} name='Status' value={SingleContact.Status} type="text"/>
            </div>
            <div className='Edit-Card-Row'>
                <div className='Edit-Card-Item'>
                    <img src={phone} alt="phone icon"/>
                    <p> phone number: </p>
                </div>
                <input onChange={handlechangeItem} name='Phone' value={SingleContact.Phone} type="text"/>
            </div>
            <div className='Edit-Card-Row'>
                <div className='Edit-Card-Item'>
                    <img src={mail} alt="phone icon"/>
                    <p> email: </p>
                </div>
                <input onChange={handlechangeItem} name='Email' value={SingleContact.Email} type="text"/>
            </div>
            <div className='Edit-Card-Row'>
                <div className='Edit-Card-Item'>
                    <img src={calender} alt="phone icon"/>
                    <p> Birthday: </p>
                </div>
                <input onChange={handlechangeItem} name='DOB' value={SingleContact.DOB} type="text"/>
            </div>
            <button className='submitBtn' onClick={handleSubmitChanges}>save changes</button>
        </div>

    )
}
export default EditCard
