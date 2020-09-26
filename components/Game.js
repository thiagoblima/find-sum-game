import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import Header from './Header'
import RandomNumber from './RandomNumber'

class Game extends React.Component {
    static propTypes = {
        randomNumberCount: PropTypes.number.isRequired
    }
    state = {
        selectedNumbers: [0, 3]
    }
    randomNumbers = Array
        .from({length: this.props.randomNumberCount})
        .map(() => 1 + Math.floor(10 * Math.random()))
    target = this.randomNumbers
        .slice(0, this.props.randomNumberCount - 2)
        .reduce((acc, curr) => acc + curr, 0)
    isNumberSelected = (numberIndex) => {
        return this.state.selectedNumbers.indexOf(numberIndex) >= 0
    }
    render() {
        return (
            <View style={styles.container}>
                <Header messageTarget={'Target Sum Game'} />
                <Text style={styles.target}>{this.target}</Text>
                <View style={styles.randomContainer}>
                    {this.randomNumbers.map((randomNumber, i) =>
                        <RandomNumber
                            key={i}
                            number={randomNumber} 
                            isSelected={this.isNumberSelected(i)}
                            />
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
    target: {
        fontSize: 50,
        backgroundColor: '#673e37',
        color: '#d2d2c9',
        margin: 50,
        borderRadius: 10,
        textAlign: 'center'
    },
    randomContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
})

export default Game
