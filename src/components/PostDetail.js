import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity,Linking,ScrollView} from "react-native";


const PostDetail = ({ post,navigation })=> {
   return (
      <ScrollView style={styles.ContainerStyle}>
          <View style={styles.pHeadStyle}>
            <Image  
            style={{width:360,height:50}}
            source={{uri:post.posthead}}
            ></Image>
          
          </View>
       
        <View style={{flex:1}}>
          <Image
            style={{width:360,height:420}}
            source={{uri: post.image}}
          />         
        </View>
        <View>    
        <Text style={styles.textstyle1}>
                 {post.cont}</Text>

      </View>
      </ScrollView>  
  )};
  
  const styles = StyleSheet.create({
        ContainerStyle:{
            backgroundColor:"#fff"
        },
        textstyle1:{
            marginLeft:15,
            marginTop:5
        },
        pHeadStyle:{
        borderColor:"#000",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        width:360,
        height:50,
        }
  })
export default PostDetail;
