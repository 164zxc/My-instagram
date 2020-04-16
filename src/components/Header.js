import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
const Header=()=>{
    return(
        <View style={styles.viewstyle}>
            <Image style={{width:150,height:45}} 
            source={require('../img/headl.png')}>
            </Image>
            <Image style={styles.right}
            source={require('../img/headr.png')}>
            </Image>
        </View>
    );
};
const styles=StyleSheet.create({
    viewstyle:{
        flexDirection:"row",
        backgroundColor:'#fff',
        height:50,
        justifyContent:"space-between",
        alignContent:"center",
        marginTop:25,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 3,
    },
    right:{
        width:40,
        height:40,
    }
});
export default Header;
