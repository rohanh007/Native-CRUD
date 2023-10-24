import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/UserList'
import UserDetails from './screens/UserDetails'
import CreateNewUser from './screens/CreateNewUser'

/* create stack for navigation */
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Users List' 
          component={HomeScreen} 
          options={{title: 'Users List'}}/>
        <Stack.Screen 
          name='User Details'
          component={UserDetails}/>
        <Stack.Screen 
          name='Create New User'
          component={CreateNewUser}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}