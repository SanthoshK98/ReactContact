import { useEffect, useState } from "react"

const SanApi = ()=>{
    const [user,setUser] = useState([]);
    const [post,setPost] = useState({
        name:'',email:'',phone:'',work:'',password:'',cpassword:''
    })
    useEffect(()=>{
        console.log("useEffect")
        getData();
    },[])
    const getData = async ()=>{
        try{
            const res = await fetch('/get')
            const data = await res.json()
            console.log(data)
            setUser(data);
        } catch(err){
            console.log(err);
        }
        
    }
    const handleData = (e)=>{
        setPost({...post,[e.target.name]:e.target.value})
    }
    const pushData = async (e)=>{
        e.preventDefault();
        const {name, email, phone, work, password, cpassword} = post
        const data = {name, email, phone, work, password, cpassword}
        console.log(data)
        try{
            const res = await fetch('/register',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            })
            const result = await res.json()
            console.log(result)
            getData();
        } catch(err){
            console.log(err)
        }
        
    }
    return(
        <div>
            <h1>Hello SanApi</h1>
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
                        </tr>
                        )
                    }
                </tbody>
            </table><br/><br/>
            <div>
                <h1>Send Data to Database</h1>
            <form method="POST">
                    <input type='text' name='name' value={post.name} onChange={handleData} placeholder="Enter Name"/><br/><br/>
                    <input type='email' name='email' value={post.email} onChange={handleData} placeholder="Enter Email"/><br/><br/>
                    <input type='number' name='phone' value={post.number} onChange={handleData} placeholder="Enter Number"/><br/><br/>
                    <input type='text' name='work' value={post.work} onChange={handleData} placeholder="Enter Work"/><br/><br/>
                    <input type='text' name='password' value={post.password} onChange={handleData} placeholder="Enter Password"/><br/><br/>
                    <input type='text' name='cpassword' value={post.cpassword} onChange={handleData} placeholder="Confirm Password" /><br/><br/>
                    <input type='submit' value='Send' onClick={pushData}/>
            </form>
            </div>
        </div>
    )
}

export default SanApi