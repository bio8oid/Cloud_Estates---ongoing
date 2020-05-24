// import React, { useState } from "react";
// export const SpinnerContext = React.createContext();

// export const Provider = props => {
//     const [loading, setLoading] = useState(true)
    
//     return (
//         <SpinnerContext.Provider value={{ loading, stopSpinner:  () => setLoading(false) }}>
//             {props.children}
//         </SpinnerContext.Provider>
//     )
// }
// // console.log('Provider:', Provider)

// export default ({ element }) => (
//     <Provider>
//         {element}
//     </Provider>
// );