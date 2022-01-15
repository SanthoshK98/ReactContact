import { useState } from "react";

export const Login = ()=>{
    const [user,setUser] = useState('');
    const [userErr,setUserErr] = useState(false);
    const [password,setPassword] = useState('');
    const [passwordErr,setPasswordErr] = useState(false);

    function userHandle(e){
    
        let item = e.target.value;
        if(item.length<4){
            setUserErr(true)
        }else{
            setUserErr(false)
        }
        setUser(item);
    }
    function passwordHandle(e){
        
        let item = e.target.value;
        if(item.length<4){
            setPasswordErr(true)
        }else{
            setPasswordErr(false)
        }
        setPassword(item);
    }
    function loginHandler(e){
        e.preventDefault();
        if(user.length<4 || password.length<4){
            alert("Invalid Details")
        }else{
            alert("Login Successfully")
        }
        console.log(user,password)
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandler}>
                <input type="text" placeholder="Enter User Id" onChange={userHandle}/>
                {userErr?<span>Invalid Credentials</span>:null}
                <br/><br/>
                <input type="password" placeholder="Enter Your Password" onChange={passwordHandle}/>
                {passwordErr?<span>Invalid Credentials</span>:null}
                <br/><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}