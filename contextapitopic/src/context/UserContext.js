// import React, {createContext} from 'react';
//
// export const DataContext = createContext()
// const UserContext = ({children}) => {
//   const userData = {
//       username:"Sarthak Sharma",
//       age:25,
//       city:"Bhopal"
//   }
//
//     return (
//         <div>
//             <DataContext.Provider value={userData}>
//             {children}
//             </DataContext.Provider>
//         </div>
//     );
// };
//
// export default UserContext;
import React from 'react';

const UserContext = React.createContext();
export default UserContext;




