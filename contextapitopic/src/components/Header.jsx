import React, {useContext, useState} from 'react';
// import userContext, {DataContext} from "../context/UserContext.js";
import UserContext from "../context/UserContext.js";

const Header = () => {
    const [data,setdata] = useState('');
    const {setUser} = useContext(UserContext)
    const handleClick = (evt) => {
        evt.preventDefault()
       setUser({data})
    }
    return (
        <div>
          <h1>Login</h1>

            <input type='text' value={data} onChange={(e)=>setdata(e.target.value)} placeholder='username'/>
            <button onClick={handleClick}>Submit</button>
        </div>
    );
};

export default Header;