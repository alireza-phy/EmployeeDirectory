import React, {useContext} from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import mail from '../InfoCard/icons8-mail-48.png';
import DOB from '../InfoCard/icons8-confetti-48.png';
import phone from '../InfoCard/icons8-phone-48.png';
import profilePic from './image/profile.png'
import {ContactsContext} from "../Context/ContactsContext";
import './NewContact.style.css'


const picCode = Math.floor(Math.random() * 10);

const NewContact = ({SingleContact, showMode, setShowMode, setSingleContact}) => {

    const {contactsList, setContactsList} = useContext(ContactsContext);

    const handleCreateNewContact = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setSingleContact({...SingleContact, [name]: value})
    }

    const handleSubmitNew = () => {
        setContactsList([...contactsList, {id: Math.random() * 1000, ...SingleContact}])
        setShowMode('')
    }

    return (
        <div className='Card-Container'
             style={(showMode) ? {transform: 'translateX(0)'} : {transform: 'translateX(800px)'}}>
            <div className='Card-Header'>

                <div onClick={() => setShowMode(false)} className='backMenu-content'>
                    <i className="bi bi-arrow-left backBtn"/>
                    <h3> Contact </h3>
                </div>
            </div>
            <div className='Profile-top'>
                <div className='Profile-Main'>
                    <img className='card-image profilePic' src={profilePic} alt="avatar"/>
                    <div className='Profile-Main-content'>
                        <input name='Firstname' placeholder='firstname...' value={SingleContact.Firstname} onChange={handleCreateNewContact}
                               type="text"/>
                        <input name='Lastname' placeholder='lastname...' value={SingleContact.Lastname} onChange={handleCreateNewContact}
                               type="text"/>
                        <input name='Status' placeholder='status...' value={SingleContact.Status} onChange={handleCreateNewContact}
                               type="text"/>
                    </div>
                </div>
            </div>
    <div className='OtherInfo'>
        <hr/>
        <div className='OtherInfo-Single'>
            <div className='OtherInfo-Single'>
                <img src={phone} alt="phone icon"/>
                <div className='OtherInfo-Single-content'>
                    <input name='Phone' placeholder='phone number...' value={SingleContact.Phone} onChange={handleCreateNewContact}
                               type="text"/>
                </div>
            </div>
        </div>
        <hr/>
        <div className='OtherInfo-Single'>
            <div className='OtherInfo-Single'>
                <img src={mail} alt="mail icon"/>
                <div>
                    <input name='Email' placeholder='Email...' value={SingleContact.Email} onChange={handleCreateNewContact}
                               type="text"/>
                </div>
            </div>
        </div>
        <hr/>
        <div className='OtherInfo-Single'>
            <div className='OtherInfo-Single'>
                <img src={DOB} alt="mail icon"/>
                <div>
                    <input name='DOB' placeholder='Date of birth...' value={SingleContact.DOB} onChange={handleCreateNewContact}
                               type="text"/>
                </div>
            </div>
        </div>
        <button className='submitBtn' onClick={handleSubmitNew}>submit</button>
    </div>
</div>
)
}

export default NewContact