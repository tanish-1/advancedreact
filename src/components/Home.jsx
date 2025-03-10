import React from 'react';
import {useNavigate} from "react-router";


const Home = () => {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate("/about")
    }
    return (
        <div>
          HomePage
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default Home;