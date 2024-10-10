import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons' ;
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome' ;
import EvilIcons from '@expo/vector-icons/EvilIcons' ;

export default function App() {
  const press = () => {
    console.log('Button pressed');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.home}><ColorChangingButton defaultIconName="shirt-outline" pressedIconName="shirt" iconSize={40} onPress={press} /></Text>
      <Text style={styles.calendar}><ColorChangingButton defaultIconName="calendar-clear-outline" pressedIconName="calendar-clear" iconSize={40} onPress={press}/> </Text>
      <Text style={styles.plus}><ColorChangingButton defaultIconName="add-circle-outline" pressedIconName="add-circle" iconSize={40} onPress={press} /></Text>
      <Text style={styles.album}><ColorChangingButton defaultIconName="albums-outline" pressedIconName="albums" iconSize={40} onPress={press} /></Text>
      <Text style={styles.profile}><ColorChangingButton defaultIconName="person-outline" pressedIconName="person" iconSize={40} onPress={press} /></Text>
      <Text style={styles.dice}><ColorChangingButton defaultIconName="dice-outline" pressedIconName="dice" iconSize={40} onPress={press} /></Text>
      <Text style={styles.text}>Fitted</Text>
      <View style={styles.horizontalLine} />
      <View style={styles.topLine} />
      <StatusBar style="auto" />
    
    </View>
  );
 

}

// function for button to change when being pressed
const ColorChangingButton = ({ defaultIconName, pressedIconName, iconSize = 40, onPress }) => {
  const [iconName, setIconName] = useState(defaultIconName);  // initial icon is set to default

  const pressed = () => {
    setIconName(pressedIconName);  // change to the dark icon when the button is pressed
  };

  const unPressed = () => {
    setIconName(defaultIconName);  // go back to the outline icon when the button is released
  };

  return (
    <Pressable
      onPressIn={pressed}
      onPressOut={unPressed}
      onPress={onPress}
    >
      <Ionicons name={iconName} size={iconSize} color="black" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
  text:{
    position: 'absolute',
    top:50,
    left:20,
    fontSize:45,
  },
  horizontalLine: {
    position: 'absolute',
    bottom : 90,
    left:0,
    right:0,
    height:1,
    backgroundColor: 'black',
  },
  topLine: {
    position: 'absolute',
    top : 105,
    left:0,
    right:0,
    height:1,
    backgroundColor: 'black',
  },
  home: {
    position: 'absolute',
    left:30,
    right:0,
    bottom: 35,

  },
  calendar: {
    position: 'absolute',
    left:105,
    right:0,
    bottom: 35,
  },
  plus: {
    position: 'absolute',
    left:180,
    right:0,
    bottom: 35,
  },
  album: {
    position: 'absolute',
    left:255,
    right:0,
    bottom: 35,
  },
  profile: {
    position: 'absolute',
    left:330,
    right:0,
    bottom: 35,

  },
  dice: {
    position: 'absolute',
    left:330,
    top: 60,

  },
});

