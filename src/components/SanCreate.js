import React, {useState, useEffect} from 'react'

const SanCreate = () => {
    const [user,setUser] = useState([]);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [work,setWork] = useState('');
    const [password,setPassword] = useState('');
    const [cpassword,setCpassword] = useState('');

    useEffect(()=>{
        console.log("useEffect")
        getUsers();
    },[])
    // const getData = async ()=>{
    //     try{
    //         const res = await fetch('/get')
    //         const data = await res.json()
    //         console.log(data)
    //         setUser(data);
    //     } catch(err){
    //         console.log(err);
    //     }
        
    // }
    function getUsers(){
        fetch('/get').then((res)=>{
        res.json().then((result)=>{
                setUser(result)
                setName(result[0].name)
                setEmail(result[0].email)
                setPhone(result[0].phone)
                
        })
    })
    }
    const deleteUser = async (id)=>{
        try{
            const res = await fetch(`/delete/${id}`,{
                method:"DELETE"
            })
            const result = await res.json();
            console.log(result)
            getUsers();
        } catch(err){
            console.log(err)
        }
        
    }
    const selectUser = (id)=>{
        let item = user.id
        console.log(item)
        // setName(item.name)
        // setEmail(item.email)
        // setPhone(item.phone)
        // setWork(item.work)
        // setPassword(item.password)
        // setCpassword(item.cpassword)
    }
    return (
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
                        <td>Cpassword</td>
                        <td>Operations</td>
                    </tr>
                    {
                        user.map((item,i)=>
                        <tr key={i}>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.work}</td>
                            <td>{item.password}</td>
                            <td>{item.cpassword}</td>
                            <td><button onClick={()=>deleteUser(item._id)}>Delete</button></td>
                            <td><button onClick={()=>selectUser(item._id)}>Update</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </table><br/><br/>
            <div>
                    <h1>Update Data</h1>
                    <form>
                        <input type='text' value={name} />
                        <input type='email' value={email}/>
                        <input type='phone' value={phone}/>
                        <input type='text' value={work}/>
                        <input type='text' value={password}/>
                        <input type='text' value={cpassword}/>
                    </form>
            </div>
        </div>
    )
}

export default SanCreate
