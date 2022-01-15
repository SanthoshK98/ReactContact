// import { useState } from "react";

const Profile = ()=>{
    // const [loggedIn,setLoggedIn] = useState(1);
    const loggedIn = 1;
    return(
        <div>
            {
                loggedIn===1?<h1>Welcome User 1</h1>
                :loggedIn===2?<h1>Welcome User 2</h1>
                :<h1>Welcome Guest</h1>

            }
        </div>
    )
}

export default Profile