import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class Game extends React.Component {
    target = 10 + Math.floor(40 * Math.random())
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.target}>{this.target}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d2d2c9',
        display: 'flex',
        justifyContent: 'center',
        flex: 1
    },
    target: {
        fontSize: 40,
        backgroundColor: '#a79086',
        marginHorizontal: 50,
        textAlign: 'center'
    }
})

export default Game
