import React, { useContext,useState,useEffect } from 'react'
import {NavigationContainer } from '@react-navigation/native'
import Navigation from '../Config/Navigation'
import {AuthContext}  from '../Config/Auth'
import AppStack from '../Config/AppStack'
import auth from '@react-native-firebase/auth'
const Routes=()=>{
    const {user, setUser}=useContext(AuthContext)
    const[intializing,setInitializing]=useState(true)
    const onAuthStateChanged=(user)=>{
    setUser(user);
    if(intializing)setInitializing(false)

  }
    useEffect(()=>{
    const subscriber=auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber

  },[])
  if(intializing)return null;
  
    return(
        <NavigationContainer>
           {user ?<AppStack/>: <Navigation/>}
        </NavigationContainer>
    )
    }
    export default Routes