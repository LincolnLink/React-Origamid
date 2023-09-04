import React from "react";
import AppUseConext from "./appUseContext";
import AppGlobal from "./appGlobal";


const UseContextExemplo = ()=>{

    const UserContext = React.createContext();


    return(
        <>
            <h1>UseContext</h1>
            <AppUseConext></AppUseConext>
            <br /><br /><br />
            <h2>exemplo Global</h2>
            <AppGlobal></AppGlobal>
            <br /><br /><br />
        </>
    )

}


export default UseContextExemplo;