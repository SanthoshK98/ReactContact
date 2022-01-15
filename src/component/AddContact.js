import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const AddContact = (props) => {
    const navigate = useNavigate()
    // console.log(props)
    const [data, setData] = useState({name:"",email:""})
    const addData = (e)=>{
        e.preventDefault();
        if(data.name === '' || data.email === ''){
            alert("All the fields are mandatory")
            return
        }
        props.addEventListner(data)
        setData({name:'',email:''})
        navigate('/')
    }
    return (
        <div>
            <form>
                <input type='text' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} placeholder='Enter Name' /><br/><br/>
                <input type='email' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}placeholder='Enter Email' /><br/><br/>
                <button onClick={addData}>Add</button>
            </form>
        </div>
    )
}

export default AddContact
