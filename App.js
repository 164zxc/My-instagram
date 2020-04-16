import React from 'react'
import { Image } from 'react-native'
import Header from './src/components/Header'
import {createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import PostScreen from './screens/PostScreen'
import DrawerContent from "./src/components/drawer"
const Tab=createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function HomeTabs() {
  return (
    
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({focused}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? require("./src/img/home.png")
            : require('./src/img/home.png');
        } else if (route.name === 'Search') {
          iconName = focused 
          ? require("./src/img/search.png")
          : require('./src/img/search.png');
        }
        else if(route.name === 'Add'){
          iconName = focused 
          ? require("./src/img/add.png")
          : require('./src/img/add.png');

        }else if(route.name === 'Favorate'){
          iconName = focused 
          ? require("./src/img/favorite.png")
          : require('./src/img/favorite.png');

        }else if(route.name === 'User'){
          iconName = focused 
          ? require("./src/img/user.png")
          : require('./src/img/user.png');

        }
        return <Image source={iconName} style={{width:30,height:30}} />;
      },
    })}
        
        
        tabBarOptions={{
          activeTintColor: '#00b49f',
          inactiveTintColor: '#818181',
        }}
        >
            <Tab.Screen name="Home" options={{tabBarLabel:' ' }} component={PostScreen}/>
            <Tab.Screen name="Search" options={{tabBarLabel:' ' }}component={PostScreen}/>
            <Tab.Screen name="Add" options={{tabBarLabel:' ' }}component={PostScreen}/>
            <Tab.Screen name="Favorate" options={{tabBarLabel:' ' }}component={PostScreen}/>
            <Tab.Screen name="User" options={{tabBarLabel:' ' }}component={PostScreen}/>
          </Tab.Navigator>
      )
    }
    
  
    const App = () => {
      return (
        
      <NavigationContainer>
        <Header></Header>
        <Drawer.Navigator initialRouteName="Home"
     drawerContent={props=>DrawerContent(props)}>
        <Drawer.Screen name="Home" component={HomeTabs} />
      </Drawer.Navigator>
       
      </NavigationContainer>
      );
    };
    
    export default App;



