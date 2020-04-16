import React from "react";
import { StyleSheet, Text, View, Image,ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import {DrawerItem,DrawerNavigation} from 'react-native';

const DrawerContent=(props)=>{
  return(
    <SafeAreaView style={{flex:1,backgroundColor:'#00b49f',zIndex:3}}>
      <View>
        
        <TouchableOpacity>
            <Text style={{color:'#fff',fontSize:14,marginTop:10}}>GamexHCI</Text>
        </TouchableOpacity>
        
        <Text style={{color:'#fff',fontSize:14,marginTop:5}}>gdlab2017@gmail.com</Text>


      </View>

     
     
    </SafeAreaView>
  )
}
export default DrawerContent;