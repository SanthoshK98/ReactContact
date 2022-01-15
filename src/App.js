import React, {useState, useEffect} from 'react'
import './App.css'
import AddContact from './component/AddContact'
import Header from './component/Header'

import ContactList from './component/ContactList'
import { Routes, Route } from 'react-router-dom'
import ContactDetail from './component/ContactDetail'
import Search from './component/Search'

const App = ()=>{
    const LOCAL_STORAGE_KEY = "contacts"
    const [contacts,setContact] = useState([])
    const addEventListner = (contact)=>{
        setContact([...contacts,{id:contacts.length, ...contact}])
    }
    const getIdHandler = (id)=>{
        const newContacts = contacts.filter((contact)=>{
            return (contact.id !== id)
        })
        setContact(newContacts)
    }
    const searchHandler = (search)=>{
        console.log(search)
    }
    // const getFetch = async ()=>{
    //     try{
    //         let resp = await fetch('/contacts',{
    //             method:"GET"
    //         })
    //         // console.log(resp)
    //         return resp.body
    //     }catch(err){
    //         console.log(err)
    //     }
        
    // }
    // useEffect(()=>{
    //     const getAll = async ()=>{
    //         const newData = await getFetch();
    //         // if(newData) setContact(newData)
    //         console.log(newData)
    //     }
    //     getAll();
    // },[])
    useEffect(()=>{
        const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(retrieveContacts) setContact(retrieveContacts)
    },[])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
    },[contacts])
    return(
        <div>
            <Header/>
            <Routes>
            
            <Route path='/add' element={<AddContact addEventListner={addEventListner}/>} />
            <Route path='/' element={<ContactList contacts={contacts} removeHandler={getIdHandler}/>} />
            <Route path='/contact/:id' element={<ContactDetail/>} />
            <Route path='/search' element={<Search searchItem={searchHandler}/>} />
            </Routes>
            
        </div>
    )
}

export default App

























// import Todo from "./components/Todo";
// import './App.css'
// import { useState } from "react";
// const App = ()=>{
//     const [todos, setTodo] = useState([
//         {id:0,title:"Task-1",complete:false},
//         {id:1,title:"Task-2",complete:false}
//     ])
//     console.log(todos.length)
//     const CompleteTodo = (id)=>{
        
//         // todos.map((todo)=>{
//         //     if(todo.id === id){
//         //         todo.complete = true;
//         //         // setTodo({...todos,complete:true})
//         //     }
//         // })
//         // if(todos.id === id){ 
//             // setTodo({...todos,complete:true})
//         // }
        
//         console.log("hello from Complete todo")
//     }
//     return(
//         <div>
//             {
//                  todos.map((todo) => 
//                     <Todo key={todo.id} todo={todo} complete={CompleteTodo}/>
//                 )
//             }
           
            
//         </div>
//     )
// }
// export default App



// import React from 'react'
// import StateArray from './components/StateArray'
// import './App.css'

// const App = () => {
//     return (
//         <div>
//             <StateArray/>
//         </div>
//     )
// }

// export default App
















// import './App.css'
// import { useForm } from 'react-hook-form'
// const App = ()=>{
//     const {register, handleSubmit, formState: {errors},reset,trigger} = useForm();
//     const onSubmit = async (data)=>{
//         console.log(data)
//         reset()
        
//         try{
//             const res = await fetch('/register',{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify(data)
//         })
//         const result = await res.json()
//         console.log(result)
//         } catch(err){
//             console.log(err)
//         }
        
//     }
//     return(
//         <div className='text-center'>
//             <h1>React Hook Form</h1>
//             <form method="POST" onSubmit={handleSubmit(onSubmit)}>
//                 <div>
//                     <label>Username</label><br/>
//                     <input className={errors.name && "invalid"} type='name' {...register('name', {required: 'Name is required'})}
//                     onKeyUp={()=>{
//                         trigger("name");
//                     }}
//                     /><br/>
//                     {errors.name && (<small className="text-danger">{errors.name.message}</small>)}
                    
//                 </div>
//                 <div>
//                     <label>Age</label><br/>
//                     <input type='number' {...register('age', 
//                     {required: 'Age is required', 
//                     min:{
//                         value:18,
//                         message:"Minimum required Age is 18"
//                     },
//                     max:{
//                         value:65,
//                         message:"Maximum required Age is 65"
//                     },
//                     pattern:{
//                         value:/^[0-9]*$/,
//                         message:"Only number is required"
//                     }
//                     })}
//                     onKeyUp={()=>{
//                         trigger("age");
//                     }}
//                     /><br/>
//                     {errors.age && (<small className="text-danger">{errors.age.message}</small>)}
                    
//                 </div>
//                 <div>
//                     <label>Email</label><br/>
//                     <input type='email' {...register('email', {required: 'Email is required',
//                 pattern:{
//                     value:/[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}/,
//                     message:"Invalid Email Address"
//                     // /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
//                 }
//                 })}
//                 onKeyUp={()=>{
//                     trigger("email");
//                 }}
//                 /><br/>
//                     {errors.email && (<small className="text-danger">{errors.email.message}</small>)}
                    
//                 </div>
//                 <div>
//                     <label>Phone</label><br/>
//                     <input type='number' {...register('phone', {required: 'Number is required',
//                 pattern:{
//                     value:/^[0-9]{10}$/,
//                     message:"Invalid Phone No"
//                 }
//                 })}
//                 onKeyUp={()=>{
//                     trigger("phone");
//                 }}
//                 /><br/>
//                     {errors.phone && (<small className="text-danger">{errors.phone.message}</small>)}
                    
//                 </div>
//                 <div>
//                     <label>Message</label><br/>
//                     <textarea {...register('message', {required: 'Message is required',
//                 minLength:{
//                     value:10,
//                     message:"Minimum allowed length is 10"
//                 },
//                 maxLength:{
//                     value:50,
//                     message:"Maximum allowed length is 50"
//                 }
//                 })}
//                 onKeyUp={()=>{
//                     trigger("message");
//                 }}
//                 ></textarea><br/>
//                     {errors.message && (<small className="text-danger">{errors.message.message}</small>)}
                    
//                 </div>
//                 <div>
//                     <input type='submit' value='Send' />
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default App


// import React from "react";
// import Counter from "./components/Counter";
// import Hover from "./components/Hover";
// const App = ()=>{
//     return(
//         <div>
//             <Counter/>
//             <Hover/>
//         </div>
//     )
// }

// export default App












// import SanApi from "./components/SanApi"
// import GetApi from "./components/GetApi"
// import SanCreate from "./components/SanCreate"
// import { useRef } from "react"

// import GetApi from "./components/GetApi"

// import Ref from "./components/Ref"
// const App = ()=>{
    // const nameRef = useRef(null)
    // const passwordRef = useRef(null)
    // const inputRef = useRef(null)
    // const submitData = (e)=>{
    //     e.preventDefault()
    //     // console.log("input 1:",nameRef.current.value)
    //     // console.log("input 2:",passwordRef.current.value)
    //     // let email = document.getElementById('email').value
    //     // console.log("input 3:",email)
    //     // inputRef.current.focus()
    //     inputRef.current.value = "1000"
    //     inputRef.current.style.color = "blue"
    //     inputRef.current.style.background = "yellow"
    //     inputRef.current.focus()
    // }
    // return(
    //     <div>
    //         <GetApi/>
        /* <Ref ref={inputRef}/>
        <button onClick={submitData}>Update Input Box</button> */




            /* <form onSubmit={submitData}>
                <input type='text' ref={inputRef}/><br/><br/> */
                /* <input type='text' ref={passwordRef}/><br/><br/>
                <input type='email' id='email'/><br/><br/> */
                /* <input type='submit' value="Send"/>
            </form> */
//         </div>
//     )
// }


// export default App











// import GetApi from "./components/GetApi"
// import PostApi from "./components/PostApi";

// import PostApi from "./components/PostApi"

// import Products from "./Hellojson";

// let admins = require('./Hellojson')
// import { Stocks } from './components/Stocks'

// const App = ()=>{
//   return(
//     <div>
//       <Stocks/>
//     </div>
//   )
// }

// export default App;

// import { useState ,useEffect} from "react";
// import './App.css'

// const App = ()=>{
//   const [user,setUser] = useState({
//     name:'',email:'',password:''
//   })

//   const [data,setData] = useState([])
//   useEffect(() => {
//     console.log('useEffect')
//     fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then((result)=>{
//       result.json().then((resp)=>{
        
//         setData(resp)
        
//       })
//     })
    
//   }, [])
//   // console.log(data)
//   // console.log('Hello')

  
//   let status, dip
//   const handleInput = (e)=>{
//     // console.log(e.target.value);
//       status=e.target.name
//       dip=e.target.value
//       setUser({...user, [status]:dip})
//   }
//   const postData = async (e)=>{
//     e.preventDefault()
//     const {name, email, password} = user 
//     let data = {name,email,password}
//     // console.log(data)
//     fetch('https://jsonplaceholder.typicode.com/posts/1/comments',{
//       method:'POST',
//       headers:{
//         'Content-type':'application/json'
//       },
//       body:JSON.stringify(data)
//     }).then((resp)=>{
//         resp.json().then((result)=>{
//           console.log('result',result)
//         })
//     })
    
//   }
//   return(
//     <div className='text-center'>
//       <h1>Login Forum</h1>
//       <table border='1'>
//         <tbody>
//         <tr>
//           <td>Id</td>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Body</td>
//         </tr>
//         {
//         data.map((item,i)=>
//         <tr key={i}>
//         <td>{item.id}</td>
//         <td>{item.name}</td>
//         <td>{item.email}</td>
//         <td>{item.body}</td>
//         </tr>
//         )
//         }
//         </tbody>
//       </table>
//       <h1>Name:{user.name}</h1>
//       <h1>Email:{user.email}</h1>
//       <h1>Password:{user.password}</h1>
//       <form method='POST'>
//         <input type='text' placeholder='Enter Your Name' name="name"  value={user.name} onChange={handleInput}/><br/><br/>
//         <input type='email' placeholder='Enter Your Email' name="email" value={user.email} onChange={handleInput} /><br/><br/>
//         <input type='password' placeholder='Enter Your Password' name="password"  value={user.password} onChange={handleInput}/><br/><br/>
//         <input type='submit'  value="Click" onClick={postData}/>
//       </form>
//     </div>
//   )
// }

// export default App






// import React,{Component} from "react";
// import './App.css'

// class App extends Component{
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        name:'',
//        password:'',
//        interest:'',
//        tnc:'',
//     }
//   }
//   handleData(e){
//     e.preventDefault();
//     console.log(e.target.value)
//   }
//   render(){
//     return(
//       <div className='text-center'>
//         <h1>{this.state.name}</h1>
//         <form onSubmit={(e)=>this.handleData(e)}>
//         <h1>Hello World</h1>
//         <input type='text' placeholder='Enter your name' onChange={(e)=>this.setState({name:e.target.value})}/><br/><br/>
//         <input type='password' placeholder='Enter your password' onChange={(e)=>this.setState({password:e.target.value})}/><br/><br/>
        
//         <select onChange={(e)=>this.setState({interest:e.target.value})}>
//           <option>MArvel</option>
//           <option>DC</option>
//           <option>SanFo</option>
//         </select><br/><br/>
//         <input type='checkbox' onChange={(e)=>this.setState({tnc:e.target.checked})}/><span>Agree Terms and Conditions</span><br/><br/>
//         <input type='submit' value='enter'/>
//         </form>
//       </div>
//     )
//   }
// }

// export default App;

















// import { useEffect, useState } from "react";
// import './App.css';
// import Style from './style.module.css'
// const App = () => {
//   const [name, setName] = useState("Santhosh")
//   useEffect(() => {
//     console.log('useEffect');
//   }, [])
//   const persons = [
//     {name:"Santhosh",Mobile:111,Address:"Bangalore"},
//     {name:"Kumar",Mobile:211,Address:"Chennai"},
//     {name:"Ram",Mobile:311,Address:"Kolkatta"},
//     {name:"Krishna",Mobile:411,Address:"Mumbai"},
//   ]
//   return (
//     <div className="text-center">
//       <h1>Hello useEffect {name}</h1>
//       <button onClick={() => setName("Ram")}>Click Me</button>
//       <table border='1' cellPadding='5' className='primary'>
//         <tbody>
//         <tr>
//           <td>ID</td>
//           <td>Name</td>
//           <td>Mobile</td>
//           <td>Address</td>
//         </tr>
//         {
//           persons.map((item,i)=>
//           item.Mobile===111?
//           <tr key={i}>
//           <td>{i}</td>
//           <td>{item.name}</td>
//           <td>{item.Mobile}</td>
//           <td>{item.Address}</td>
//           </tr>
//           :null
//       )
//       }
//       </tbody>
//       </table>
      
      
//     </div>
//   )
// }

// export default App


















// import React, {Component} from 'react';
// import Lifecycle from './components/Lifecycle';
// import Unmount from './components/Unmount';

// import User from "./User";
// import { useState } from "react";

// const App = ()=>{
//   const [name,setName] = useState('Santhosh')
//   function sendData(){
//     setName("Kumar")
//   }
//   return(
//     <div>
//       <h1>{name}</h1>
//       {/* <button onClick={sendData}>Click Me</button> */}
//       <User data={sendData}/>
//     </div>
//   )
// }
// export default App
// class App extends Component{
//   constructor() {
//     super()

//     this.state = {
//          name:"Santhosh",
//          count:0,
//          service:true
//     }
// }
//  changeData(){
//   this.setState({count:this.state.count+1})
//  }
//   render()
//   {

//     return(
//       <div>
//         {
//           this.state.service?<Unmount/>:null
//         }

//         <button onClick={()=>this.setState({service:false})}>Click to Unmount</button>
//         {/* <Lifecycle data={()=>this.changeData()} name={this.state.name} count={this.state.count}/>
//         <button onClick={()=>this.setState({name:"Koneti"})}>Change State</button> */}

//       </div>
//     )
//   }
// }

// export default App

// function App(){
//   const [show,setShow] = React.useState(true);
//   return(
//     <div>
//       {
//         show?
//         <h1>Hello World</h1>:
//         null
//       }
//       <button onClick={()=>setShow(!show)}>Toggle</button>

//     </div>
//   )

// }

// const App = ()=>{
//   const [name,setName]=useState('');
//   const [interest,setInterest]=useState('');
//   const [TnC,setTnC]=useState('');
//   function handleData(e){
//     e.preventDefault();
//     console.log(name,interest,TnC);
//   }
//   return(
//     <div>
//       <form onSubmit={handleData}>
//         <input type="text" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)} /><br/><br/>
//         <select onChange={(e)=>setInterest(e.target.value)} >
//           <option>Marvel</option>
//           <option>DC</option>
//           <option>UV</option>
//         </select>
//         <br/><br/>
//         <input type="checkbox" onChange={(e)=>setTnC(e.target.checked)} /><span>Agree with Terms and Conditions</span>
//         <br/><br/>
//         <input type="submit" value="Submit"/>
//       </form>
//     </div>
//   )
// }

// const App = () => {
//   const [data,setData] = useState('');
//   const [name,setName] = useState(false);
//   function getData(event){
//     // console.log(event.target.value);
//     setData(event.target.value);
//     setName(false);
//   }
//   return (
//     <div>

//       {
//         name?
//         <h1>{data}</h1>
//         :null
//       }
//       <input type="text" onChange={getData}/>
//       {/* <button onClick={()=>setName(true)}>Click Me</button> */}
//       <User/>

//     </div>
//   )
// }

// export default App

// class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       name:"Hello World"
//     }
//   }

//   render(){
//     return(
//       <div>
//         <StudentClass name={this.state.name}/>
//         <button onClick={()=>this.setState({name:"Santhosh"})}>Click Me</button>
//       </div>
//     )
//   }
// }



