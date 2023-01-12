/**
 * Sandbox to debug React Navigation for Windows
 *
 * @format
 */
// React
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

// Navigation
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function SomeOtherScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Other Screen</Text>
    </View>
  );
}

function SomeScreen({navigation}) {
  const [someValue, setSomeValue] = useState(1);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>{someValue}</Text>
      <Button title={'Increment'} onPress={() => setSomeValue(someValue + 1)} />
      <Button
        title={'Go to other screen'}
        onPress={() => navigation.push('Some Other Screen')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Some Screen" component={SomeScreen} />
        <Stack.Screen name="Some Other Screen" component={SomeOtherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
