import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import  AsyncStorage  from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
export default function Home({navigation}) {

    logout=async () => {
        try {
            await AsyncStorage.setItem("isloggedin",false);
        
        } catch (error) {
            
        }
         navigation.navigate("Login")
    }
       
        
        
    
    
    
  
  return (
    <View>
<TouchableOpacity style={styles.loginBtn}
      
      onPress={() =>
        navigation.navigate('Languages')}>
        <Text style={styles.loginText}>Users</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}
      
      onPress={() =>
        navigation.navigate('UsersList')}>
        <Text style={styles.loginText}>Users</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}
      
      onPress={() =>
        navigation.navigate('CoffeeList')}>
        <Text style={styles.loginText}>Coffe List</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}
      
      onPress={()=> logout()}>
        <Text style={styles.loginText}>Logout</Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  }
});
