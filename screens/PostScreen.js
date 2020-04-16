import React from "react";
import { View, FlatList } from "react-native";
import PostDetail from "../src/components/PostDetail";
import PostData from "../json/PostDetail.json";

const PostScreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      
      <FlatList
      data={PostData.PostList}
      renderItem={({ item }) => 
      <PostDetail 
      post={item} 
      navigation={navigation}
      />}
      keyExtractor={item => item.title}
      />
      
    </View>
  );
};

export default PostScreen;
