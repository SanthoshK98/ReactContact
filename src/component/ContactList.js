import React from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'

const ContactList = (props) => {
    const RemoveHandlerF = (id) => {
        props.removeHandler(id);
    }
    const renderFunction = props.contacts.map((contact, i) => {
        return (
            <ContactCard key={i} contact={contact} deleteHandler={RemoveHandlerF} />
        )
    }

    )

    return (
        <div>
            <h2>Contact List</h2>
            <Link to='/add'><button >Add Contact</button></Link>
            {renderFunction}
        </div>
    )
}

export default ContactList
