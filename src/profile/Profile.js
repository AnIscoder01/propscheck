import Info from "./Info";
import React from "react";
const Profile=({fullName,profession,bio})=>{
   
    return(
        <>     
            <Info  style={{backgroundImage: `url("https://via.placeholder.com/500")`,textAlign:'center',display:'Block',color:'darkgreen'}}fullName={fullName} profession={profession} bio={bio}/>
            
        </>
    )
}
export default Profile;