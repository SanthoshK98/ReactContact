import React from 'react'
import { Link } from 'react-router-dom'

const ContactCard = (props) => {
    const {id,name,email} = props.contact
    return (    
        <div className='item'>
            <Link to={{pathname:`/contact/${id}`, state:{contact:props.contact} }}>
            <h2 className='content'>{id}</h2>
            <h2 className='content'>{name}</h2>
            <h3 className='content'>{email}</h3>
            
            </Link>
            <button onClick={()=>props.deleteHandler(id)}>Delete</button>
            
        </div>
        
    )
}

export default ContactCard

