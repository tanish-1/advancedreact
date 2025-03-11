import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import Footer from "./components/Footer.jsx";
// import {useContext} from "react";
// import {DataContext} from "./context/UserContext.js";
import UserContextProvider from "./context/UserContextProvider.jsx";
import Profile from "./components/Profile.jsx";


const App = () => {

    return (
           <>
            <h1>This is Main component</h1>
         <Header/>
           <Profile/>
           </>
    );
};

export default App;