import React from 'react'
import AuthProvider from '../Config/Auth'
// import Routes from '../Config/Routes'
import Routes from '../Config/Routes'
const Provider=()=>{
    return(
        <AuthProvider>

            <Routes/>
        </AuthProvider>
    )
}
export default Provider