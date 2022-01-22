import React, {useState, useContext} from 'react';
import './InfoCard.styles.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import mail from './icons8-mail-48.png'
import DOB from './icons8-confetti-48.png'
import phone from './icons8-phone-48.png'
import whatsappLogo from './icons/icons8-whatsapp.svg'
import telegramLogo from './icons/icons8-telegram-app.svg'
import skypeLogo from './icons/icons8-skype.svg'
import EditCard from '../EditCard/EditCard'
import {ContactsContext} from "../Context/ContactsContext";
import {handleStatusColor} from "../ContactContainer/ContactContainer";

const InfoCard = ({SingleContact, showMode, setShowMode, setSingleContact}) => {

    const [editShow, setEditShow] = useState(false)
    const {contactsList, setContactsList} = useContext(ContactsContext);

    const handleDeleteContact = () => {
        setContactsList(contactsList.filter(contact => contact.id !== SingleContact.id))
        setShowMode('')
    }

    return (
        <div className='Card-Container'>
            <div className='Card-Header'>
                <div className='CardBtns'>
                    <i onClick={handleDeleteContact} className="bi bi-trash trashBtn"/>
                    <i onClick={() => setEditShow(true)} className="bi bi-pencil editBtn"/>
                </div>

                <div onClick={() => setShowMode('')} className='backMenu-content'>
                    <i className="bi bi-arrow-left backBtn"/>
                    <h3> Contact </h3>
                </div>
            </div>
            <div className='Profile-top'>
                <div className='Profile-Main'>
                    <img className='card-image' src={`https://i.pravatar.cc/150?img=${SingleContact.id % 11 + 1}`}
                         alt="avatar"/>
                    <div className='Profile-Main-content'>
                        <h4> {SingleContact.Firstname} {SingleContact.Lastname} </h4>
                        <div className='status-style' style={handleStatusColor(SingleContact.Status)}>
                            {SingleContact.Status}
                        </div>
                    </div>
                </div>

            </div>
            <div className='Contact-icons'>
                <img src={whatsappLogo} alt=""/>
                <img src={skypeLogo} alt=""/>
                <img src={telegramLogo} alt=""/>
            </div>
            <div className='OtherInfo'>
                <hr/>
                <div className='OtherInfo-Single'>
                    <div className='OtherInfo-Single'>
                        <img src={phone} alt="phone icon"/>
                        <div className='OtherInfo-Single-content'>
                            <p> phone number </p>
                            <h4> {SingleContact.Phone} </h4>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='OtherInfo-Single'>
                    <div className='OtherInfo-Single'>
                        <img src={mail} alt="mail icon"/>
                        <div>
                            <p> Email </p>
                            <h4> {SingleContact.Email} </h4>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='OtherInfo-Single'>
                    <div className='OtherInfo-Single'>
                        <img src={DOB} alt="birthday icon"/>
                        <div>
                            <p> Date of birthday </p>
                        <h4> {SingleContact.DOB} </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <EditCard
                    SingleContact={SingleContact}
                    setSingleContact={setSingleContact}
                    editShow={editShow}
                    setEditShow={setEditShow}
                />
            </div>
        </div>
    )
}

export default InfoCard