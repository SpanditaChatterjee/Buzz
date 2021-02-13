import * as React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import fbScreen from './Screens/fb'
import inScreen from './Screens/in'

export default class App extends React.Component{
    render(){
        return(
            <AppContainer/>
        )
    }
}

const tabNavigator=createBottomTabNavigator({
    fb:{screen:fbScreen},
    in:{screen:inScreen}
});

const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "red",
      alignItems: "center",
      justifyContent: "center"
    }
  });