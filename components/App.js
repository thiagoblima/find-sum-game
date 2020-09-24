import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        flex: 1
    }
})

export default App
