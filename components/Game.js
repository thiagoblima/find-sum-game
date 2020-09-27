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
            selectedIds: []
        }
        randomNumbers = Array
            .from({length: this.props.randomNumberCount})
            .map(() => 1 + Math.floor(10 * Math.random()))
        target = this.randomNumbers
            .slice(0, this.props.randomNumberCount - 2)
            .reduce((acc, curr) => acc + curr, 0)
        isNumberSelected = (numberIndex) => {
            return this.state.selectedIds.indexOf(numberIndex) >= 0
        }
        selectNumber = (numberIndex) => {
            this.setState((prevState) => ({ selectedIds: [...prevState.selectedIds, numberIndex] }))
        }
        gameStatus = () => {
            const sumSelected = this.state.selectedIds.reduce((acc, curr) => {
                   return acc + this.randomNumbers[curr]
            }, 0)
            if (sumSelected < this.target) {
                return 'PLAYING'
            }
            if (sumSelected === this.target) {
                return 'WON'
            }
            if (sumSelected > this.target) {
                return 'LOST'
            }
        }

        render() {
            const gameStatus = this.gameStatus()
            return (
                <View style={styles.container}>
                    <Header messageTarget={'Target Sum Game'} />
                    <Text style={styles.target}>{this.target}</Text>
                    <View style={styles.randomContainer}>
                        {this.randomNumbers.map((randomNumber, i) =>
                            <RandomNumber
                                key={i}
                                id={i}
                                number={randomNumber}
                                isDisabled={this.isNumberSelected(i)}
                                onPress={this.selectNumber}
                            />
                        )}
                    </View>
                    <Text>{gameStatus}</Text>
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
            margin: 50,
            borderRadius: 10,
            fontSize: 50,
            borderWidth: 4,
            borderColor: '#a79086',
            color: '#d2d2c9',   
            shadowColor: '#a79086',
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            overflow: 'hidden',
            backgroundColor: '#673e37',
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
