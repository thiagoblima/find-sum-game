import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import PropTypes from 'prop-types'

class Game extends React.Component {
    static propTypes = {
        randomNumberCount: PropTypes.number.isRequired
    }
    randomNumbers = Array
        .from({length: this.props.randomNumberCount})
        .map(() => 1 + Math.floor(10 * Math.random()))
    target = this.randomNumbers
        .slice(0, this.props.randomNumberCount - 2)
        .reduce((acc, curr) => acc + curr, 0)
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}> Target Sum Game </Text>
                <Text style={styles.target}>{this.target}</Text>
                <View style={styles.randomContainer}>
                    {this.randomNumbers.map((randomNumber, i) =>
                        <Text style={styles.random} key={i}> {randomNumber}</Text>
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d2d2c9',
        flex: 1,
    },
    header: {
        margin: 20,
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: '#6d031c',
        color: '#d2d2c9',
        padding: 25,
    },
    target: {
        fontSize: 50,
        backgroundColor: '#673e37',
        color: '#d2d2c9',
        margin: 50,
        textAlign: 'center'
    },
    randomContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    random: {
        backgroundColor: '#a79086',
        color: '#d2d2c9',
        fontSize: 35,
        width: 100,
        height: 100,
        lineHeight: 100,
        marginHorizontal: 15,
        marginVertical: 35,
        textAlign: 'center'
    }
})

export default Game
