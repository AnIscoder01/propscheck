const Info=({fullName,bio,profession})=>{
    const handleName=()=>    {
        
        return alert(`My name is ${fullName} 
        my profession is ${profession} 
        also ${bio}`);
    };
    return(<>
            

            <div style={{backgroundImage: `url("https://via.placeholder.com/500")`,textAlign:'center',display:'Block',color:'darkgreen'}}>

            <h3>Fullname: {fullName}</h3>
            <h3>Bio: {bio}</h3>
            <h3>Profession: {profession}</h3>

            <button onClick={handleName}> handleName window</button>
            </div>

            </>
        
    );

}
export default Info;