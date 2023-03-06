import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Pages/Home/home";
import New from "./Pages/New/new";
import Notification from "./Pages/Notification/notification";
import Profile from "./Pages/Profile/profile";
import Search from "./Pages/Search/search";
import ButtomNew from "./ButtomNew";


import {Feather, Entypo} from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function Routes() {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor:'#121212',
                    borderTopColor:'transparent',
                    paddingTop:5,
                    paddingBottom:5
                },
                tabBarActiveTintColor:'#FFF',
                
            }}
        >
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Entypo name="home" size={size} color={color}/>
                )
            }}
            />

            <Tab.Screen 
            name="Search" 
            component={Search} 
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Feather name="search" size={size} color={color}/>
                )
            }}
            />

            <Tab.Screen 
            name="New" 
            component={New} 
            options={{
                tabBarLabel: '',
                tabBarIcon: ({ focused ,size, color } ) => (
                    <ButtomNew size={size} color={color} focused={focused}/>
                )
            }}
            />

            <Tab.Screen 
            name="Notification" 
            component={Notification} 
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Entypo name="notification" size={size} color={color}/>
                )
            }}
            />
            
            <Tab.Screen 
            name="Profile" 
            component={Profile}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Feather name="user" size={size} color={color}/>
                )
            }} 
            />

        </Tab.Navigator>
    )
}