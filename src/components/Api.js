import React, {useEffect, useState} from 'react'

const Api = () => {
    const [result,setResult] = useState([]);
    const [post, setPost] = useState({
        id:'',name:'',phone:'',username:''
    })
    useEffect(()=>{
        getApi()
           
    },[]);
    const getApi = async ()=>{
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            console.log(data)
            setResult(data)
        }catch(err){
            console.log(err)
        }
    }
    const pushData = (e)=>{
        setPost({...post, [e.target.name]:e.target.value})  
    }
    
    const handleData = async (e)=>{
        e.preventDefault();
        const {name,phone,username} = post
        const data = {name,phone,username}
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/users',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        const result = await res.json()
        console.log(result)
        } catch(err){
            console.log(err)
        }
        
        // postApi(data)
    }
    // async function postApi(key){
    //     try{
    //         const res = await fetch('https://jsonplaceholder.typicode.com/users',{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify(key)
    //     })
    //         const result = await res.json()
    //             console.log(result)
            
        
    //     } catch(err){
    //         console.log(err)
    //     }
    // }
    return (
        <div>
            <h1>Get API</h1>
            <table border='1'>
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>UserName</td>
                    </tr>
                    {
                        result.map((item,i)=>
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.username}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
           
            <form method='POST'>
                <input type='text' name="name" value={post.name} onChange={pushData}/><br/><br/>
                <input type='number' name="phone" value={post.phone} onChange={pushData}/><br/><br/>
                <input type='text' name="username" value={post.username} onChange={pushData}/><br/><br/>
                <button onClick={handleData}>Send</button>
            </form>
        </div>
    )
}

export default Api
