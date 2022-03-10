import React from 'react';
import Profile from './profile/Profile';
import Pic from './profile/Pic';

function App() {
  const fullName="Anis";
  const bio="Good Analytic Skills · Deep Logic Building et Problem Solving Skills · Great Understanding of Data Structures et Algorithms ·"
  const profession="developper";
  const pic="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
  
  
  return (
    <div className="App">

       <Pic pic={pic}/>

      <Profile fullName={fullName} bio={bio} profession={profession}/>     

    </div>
  );
}

export default App;
