import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, } from 'react-native';

import FlexDemo1Screen from './FlexDemo1'
import AboutScreen from './About'



const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          //options={{ title: 'Welcome' }}
        />

        <Stack.Screen name="Profile" component={ProfileScreen} />

        {/* <Stack.Screen name="About" component={ProfileScreen} /> */}

        <Stack.Screen name="FlexDemo1" component={FlexDemo1Screen} />
        <Stack.Screen name="About" component={AboutScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
      <View style={{ flexDirection: 'row',
                    //  margin:"25px",
                     borderTopColor: "black",
                     borderTopWidth: "2px",
                     padding:'10px',
                     position: "absolute",
                     bottom: 0,
                     width: "-webkit-fill-available",
                     justifyContent: 'space-around', }}>

        <Button
          title="Home"
          onPress={() =>
            navigation.navigate('NavDemo1')
          }
        />

        <Button
          title="About"
          onPress={() =>
            navigation.navigate('About')
               // we're passing a parameter name:'Jane' to the Profile component!
          }
        />

        <Button
          title="Profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Jacob', greeting:'Hello' })
               // we're passing a parameter name:'Jane' to the Profile component!
          }
        />

    </View>
  );
};

// ProfileScreen function is called with a JSON object
//  {navigation:..., route:...,  otherstuff}
const ProfileScreen = ({ navigation, route }) => {
  return <Text>{route.params.greeting}, this is {route.params.name}'s profile</Text>;
       // we're using the parameter name passed in from the HomeScreen
};

export default MyStack;
