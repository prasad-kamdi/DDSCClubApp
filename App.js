import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './screens/LandingPage';
import CoachesPage from './screens/CoachesPage';
import SwimmersPage from './screens/SwimmersPage';
import JoinUsPage from './screens/JoinUsPage';
import SquadsPage from './screens/SquadsPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LandingPage} />
        <Stack.Screen name="Coaches" component={CoachesPage} />
        <Stack.Screen name="Swimmers" component={SwimmersPage} />
        <Stack.Screen name="Join Us" component={JoinUsPage} />
        <Stack.Screen name="Squads" component={SquadsPage} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;