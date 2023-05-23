// dependencies
import React,{useEffect} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/loginscreen';
import EmployeeRegister from './screens/EmployeeRegister';
import EmployerRegister from './screens/EmployerRegister';
//components
// import NavBar from './components/navbar.jsx';

// screens

const Stack = createStackNavigator();


const App = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name = "TEENTASKIO" component = {LoginScreen}/>
          <Stack.Screen name = "Employee Register" component = {EmployeeRegister}/>
          <Stack.Screen name = "Employer Register" component = {EmployerRegister}/>
         </Stack.Navigator> 
    </NavigationContainer>
  );
}
/*backgroundColor: '#192C41'
*/
export default App;