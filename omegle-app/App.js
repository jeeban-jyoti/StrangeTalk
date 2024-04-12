import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './pages/Home';
import Chat from './pages/Chat';
import Video from './pages/Video';
import Cred from './pages/KnownCred';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center', 
        headerTitleStyle: {
            fontWeight: 'bold',
          },
          }}>
        <Stack.Screen name="Welcome to OMEGLE" component={HomeScreen} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Video" component={Video} />
        <Stack.Screen name="Cred" component={Cred} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}
