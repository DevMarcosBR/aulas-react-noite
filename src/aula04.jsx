import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Aula04 extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
            source={require('../assets/icon.png')}
            style={styles.icon }
        />
        <Image
            source={{ uri: 'https://media.gettyimages.com/id/170437062/pt/foto/europeia-de-texugo-americano.jpg?s=2048x2048&w=gi&k=20&c=G2x96I3XCts3s1Q2qj0u0w55W1AQ7V8ZDE_dE0G7PX8=' }}
            style={styles.icon }
        />
        
      </View>
    );
  }
}

export default Aula04;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: 150,
    height: 150,
  }

});