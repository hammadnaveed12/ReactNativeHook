import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './Login';
import Home from './Home';
import Languages from "./Languages"
import CoffeeList from './CoffeeList';

export default function App(prop) {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}></Stack.Screen>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Languages" component={Languages}></Stack.Screen>
                <Stack.Screen name="CoffeeList" component={CoffeeList}></Stack.Screen>
                
               
            </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
