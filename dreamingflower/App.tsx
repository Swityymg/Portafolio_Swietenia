import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash'
import Login from './screens/Login'
import Home from './screens/Home'
import Post from './screens/Post'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen
        name='Splash'
        component={Splash}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='Login'
        component={Login}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='Home'
        component={Home}
        options={{title:"Listado de Posts"}}
        />
        <Stack.Screen
        name='Post'
        component={Post}
        options={{title:"Detalles del Post"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
