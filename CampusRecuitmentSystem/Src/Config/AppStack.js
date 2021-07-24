import React, { useContext } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator,drawerLabel } from '@react-navigation/drawer';
// import Sidebar from '../components/sidebar'
// import Sidebar from '../components/sidebar'
import AuthContext from '../Config/Auth'
// import Home from '../components/Home'
import Home from '../Components/Home'
import Product from '../Config/product'
// const Stack=createStackNavigator()
const Drawer = createDrawerNavigator();
const navigationhandel=()=>({

    headerShown: false
  }
)
const AppStack=()=>{
//   const {user}=useContext(AuthContext)

    return(

    // <Stack.Navigator>
    //     <Stack.Screen options={navigationhandel} name="Home" component={Home}/>
    // </Stack.Navigator>
    <Drawer.Navigator>
        {/* drawerContent={props=><Sidebar {...props}/>} */}
         
       
    <Drawer.Screen name="Home" component={Home}  />
    <Drawer.Screen name="Product" component={Product}  />

    
   






  </Drawer.Navigator>
    )

}
export default AppStack  