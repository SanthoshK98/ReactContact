import React, {useState} from 'react'
import user from '../images/download.jpeg'
import { useLocation } from 'react-router-dom'

const ContactDetail = () => {
    // const params = useParams();
    const location = useLocation();
    // const {hello} = location.state
    // const [state, setState] = useState(location.state)
    
    console.log(location)
    // console.log(JSON.stringify(params))
    // const {name, email} = props.state.contact
    return (
        <div className='main'>
            <div className='ui card centered'>
                <div className='image'>
                    <img src={user} alt="user" />
                </div>
                <div className='content'>
                    <h2 className='header'>Hello</h2>
                    <h2 className='description'>hello@gmail.com</h2>
                </div>
            </div>
            <div className='center-div'>
                <button className='ui button blue center'>Back to Contact List</button>
            </div>
        </div>
    )
}

export default ContactDetail
