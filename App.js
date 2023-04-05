import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';

import Home from './src/pages/Home/Home'
import LoginScreen from './src/pages/Login/LoginScreen';
import RegisterScreen from './src/pages/SignUp/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
          <Stack.Screen name="Signup" component={RegisterScreen} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          
          
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}


