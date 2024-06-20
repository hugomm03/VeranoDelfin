import React from "react";
import { StyleSheet, View} from 'react-native';
import  {MainStack}  from "./Index";

export default function App () {
  return (
    <View style={styles.container}>

      <MainStack />    

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});