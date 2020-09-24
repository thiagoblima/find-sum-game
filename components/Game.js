import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

class Game extends React.Component {
    static propTypes = {
        randomNumberCount: PropTypes.number.isRequired
    }
    randomNumbers = Array
        .from({length: this.props.randomNumberCount})
        .map(() =>  1 + Math.floor(10 * Math.random()))
    target = this.randomNumbers
        .slice(0, this.props.randomNumberCount - 2)
        .reduce((acc, curr) => acc + curr , 0)
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.target}>{this.target}</Text>
                <Text style={styles.target}>{this.randomNumbers}</Text>
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
