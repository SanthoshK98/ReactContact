export default function Student(props){
    console.log(props);
    return(
        
        <div style={{background:'skyblue',margin:60}}>
            <h1>Hello {props.name}</h1>
            <h2>Email:{props.email}</h2>
            <h3>Address:{props.other.address}</h3>
        </div>
    )
}

