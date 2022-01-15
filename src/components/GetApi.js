import { useEffect, useState } from "react";
import '../App.css';
const GetApi = ()=>{
    const [data,setData] = useState([]);
    // const [name,setName] = useState('');
    // const [email,setEmail] = useState('');
    // const [phone,setPhone] = useState('');
    // const [work,setWork] = useState('');
    // const [password,setPassword] = useState('');
    // const [cpassword,setCpassword] = useState('');
    const [userId,setUserId] = useState(null);
    const [database,setDatabase] = useState({
        name:'',email:'',phone:'',work:'',password:'',cpassword:''
    })

    useEffect(()=>{
        getUsers();
    },[])
    function getUsers(){
        fetch('/get').then((res)=>{
        res.json().then((result)=>{
                setData(result)
                // setUserId(result[0]._id)
                // setDatabase({...database,password:result[0].password})
                // setDatabase({...database,name:result[0].name})
                // setDatabase({...database,email:result[0].email})
                // setDatabase({...database,phone:result[0].phone})
                // setDatabase({...database,work:result[0].work})
                // setDatabase({...database,[]:result[0].value})
                
                setDatabase({...database,name:result[0].name,email:result[0].email,phone:result[0].phone,work:result[0].work,password:result[0].password,cpassword:result[0].cpassword})
                // setName(result[0].name)
                // setEmail(result[0].email)
                // setPhone(result[0].phone)
                // setWork(result[0].work)
                // setPassword(result[0].password)
                // setCpassword(result[0].cpassword)
        })
    })
    }
    const selectUser = (index)=>{
        // console.warn('function called',data[id-1])
        let item = data[index];
        setUserId(item._id)
        // setName(item.name)
        // setEmail(item.email)
        // setPhone(item.phone)
        // setWork(item.work)
        // setPassword(item.password)
        // setCpassword(item.cpassword)
        setDatabase({...database,name:item.name,email:item.email,phone:item.phone,work:item.work,password:item.password,cpassword:item.cpassword})
        console.log('item')
        
    }
    const deleteUser = (id)=>{
        fetch('/delete/'+id,{
            method:"DELETE"
        }).then((resp)=>{
            resp.json().then((result)=>{
                console.log(result)
                getUsers();
            }).catch((err)=>{
                alert("not deleted")
            })
        })
    }
    const updateUser = (id)=>{
        const {name,email,phone,work,password,cpassword} = database
        let item = {name,email,phone,work,password,cpassword}
        if(password !== cpassword){
            alert("Password Not Matching")
        }else{
            console.log('item')
        fetch(`/update/${id}`,{
            method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(item)
        }).then((resp)=>{
            resp.json().then((result)=>{
                console.log(result)
                getUsers();
            })
        }).catch((err)=>{
            alert("not Updated")
        })
        }
        
    }
    const handleData = (e)=>{
        setDatabase({...database,[e.target.name]:e.target.value})
    }
    return(
        <div>
        <table border='1'>
            <tbody>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Work</td>
                    <td>Password</td>
                    <td>CPassword</td>
                    <td>Operations</td>
                    <td>Operations</td>
                </tr>
                {
                    data.map((item,i)=>
                        <tr key={i}>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.work}</td>
                            <td>{item.password}</td>
                            <td>{item.cpassword}</td>
                            <td><button onClick={()=> deleteUser(item._id)}>Delete</button></td>
                            <td><button onClick={()=> selectUser(i)}>Update</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table><br/><br/><br/>
        <div className='text-center'>
            {/* <input type='text' value={_id}  onChange={(e)=>setUserId(e.target.value)}/><br/><br/> */}
            <input type='text' name='name' value={database.name}  onChange={handleData}/><br/><br/>
            <input type='text' name='email' value={database.email} onChange={handleData} /><br/><br/>
            <input type='text' name='phone' value={database.phone}  onChange={handleData}/><br/><br/>
            <input type='text' name='work' value={database.work}  onChange={handleData}/><br/><br/>
            <input type='text' name='password' value={database.password}  onChange={handleData}/><br/><br/>
            <input type='text' name='cpassword' value={database.cpassword}  onChange={handleData}/><br/><br/>
            {database.password!==database.cpassword?<span>Password Not Matching</span>:null}<br/><br/>
            {/* <input type='submit' value='Update User' /> */}
            <button onClick={()=>updateUser(userId)}>Update User</button>
        </div>
    </div>
    )
}

export default GetApi;