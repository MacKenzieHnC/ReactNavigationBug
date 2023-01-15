/* eslint-disable react-native/no-inline-styles */
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
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

type RootStackParamList = {
  'Some Screen': undefined;
  'Some Other Screen': undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

function SomeScreen({navigation}: Props) {
  const [someValue, setSomeValue] = useState(1);
  console.log('Some Screen');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text
          style={{
            fontSize: 40,
            color: 'white',
          }}>
          Value
        </Text>
        <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>
          {someValue}
        </Text>
        <Button
          title={'Increment'}
          onPress={() => setSomeValue(someValue + 1)}
        />
        <Button
          title={'Navigate'}
          onPress={() => navigation.push('Some Other Screen')}
        />
      </View>
    </View>
  );
}

function SomeOtherScreen() {
  console.log('Some Other Screen');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30, color: 'white'}}>Other Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

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
