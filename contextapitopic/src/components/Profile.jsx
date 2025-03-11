import React, {useContext} from 'react';
import UserContext from "../context/UserContext.js";

const Profile = () => {
    const {user} = useContext(UserContext);
    // if(!user) return <div> Please, Login</div>;
    // return <div>Welcome {user.data}</div>
    return (
        <>
            {user ? <div>Welcome {user.data}</div> : <div>Please, Login</div>}
        </>
    );


};

export default Profile;