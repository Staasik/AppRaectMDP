import React from "react";
import Hi from './Hi.js'
import Menu from './Menu.js'

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
 export default function navigate() {
     return <NavigationContainer>
         <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
             name="Menu"
             component={Menu}
             />
             <Stack.Screen    
             name="Hi"
             component={Hi}
             />

         </Stack.Navigator>
     </NavigationContainer>;
 }