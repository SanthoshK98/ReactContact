import React, {useState} from 'react';
import '../App.css';
const PostApi = () => {
    const [user, setUser] = useState({
        userName:'',email:'',password:''
    })
    const handleData = (e)=>{

        setUser({...user,[e.target.name]:e.target.value});
        // console.log(user.userName,user.email,user.password)
    }
    const saveData = (e)=>{
        e.preventDefault();
        const {userName,email,password} = user;
        let data = {userName,email,password};
        console.log(data)
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments',{
            method:'POST',
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(data)
        }).then((resp)=>{
            resp.json().then((result)=>{
                console.log(result)
                alert("post successful")
            })
        })
    }
    return (
        
        <form className='text-center' method='POST' onSubmit={saveData}>
            
            <h1>Login Page</h1>
            <input type='text' placeholder='Enter your name' name='userName' value={user.userName} onChange={handleData} /><br/><br/>
            <input type='email' placeholder='Enter your email' name='email' value={user.email} onChange={handleData}/><br/><br/>
            <input type='password' placeholder='Enter your password' name='password' value={user.password} onChange={handleData}/><br/><br/>
            <input type='submit' value='submit'/>
        </form>
        
    )
}

export default PostApi
