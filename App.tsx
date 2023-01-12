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
import {CommonActions, NavigationAction} from '@react-navigation/routers';
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
  console.log('Some Screen has been rendered');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text
          style={{
            fontSize: 40,
          }}>
          Value
        </Text>
        <Text style={{fontSize: 30, textAlign: 'center'}}>{someValue}</Text>
        <Button
          title={'Increment'}
          onPress={() => setSomeValue(someValue + 1)}
        />
      </View>

      <View>
        <Text style={{fontSize: 40}}>Re-renders, destroying state</Text>
        <Button title={'Push'} onPress={() => navigation.push('Some Screen')} />
        <Button
          title={'Replace'}
          onPress={() => navigation.replace('Some Screen')}
        />
        <Button
          title={'Navigate'}
          onPress={() =>
            navigation.dispatch(
              CommonActions.navigate({name: 'Some Other Screen'}),
            )
          }
        />
        <Button
          title={'Reset'}
          onPress={() =>
            navigation.reset({index: 1, routes: [{name: 'Some Screen'}]})
          }
        />
      </View>

      <View>
        <Text style={{fontSize: 40}}>Re-renders, preserving state</Text>
        <Button
          title={'Set Params'}
          onPress={() =>
            navigation.dispatch(CommonActions.setParams({user: 'Wojtek'}))
          }
        />
      </View>

      <View>
        <Text style={{fontSize: 40}}>Does not re-render</Text>
        <Button
          title={'Navigate To Self'}
          onPress={() =>
            navigation.dispatch(CommonActions.navigate({name: 'Some Screen'}))
          }
        />
      </View>
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
