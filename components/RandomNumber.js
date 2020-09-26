import React from 'react'
import PropTypes from 'prop-types'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'

class RandomNumber extends React.Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        isDisabled: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired
    }
    handlePress = () => {
        this.props.onPress(this.props.id)
    }
    render() {
        return (
            <TouchableOpacity onPress={this.handlePress}>
                <Text style={[styles.random, this.props.isDisabled && styles.disabled]}> {this.props.number}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    random: {
        backgroundColor: '#a79086',
        color: '#d2d2c9',
        fontSize: 35,
        borderRadius: 10,
        width: 100,
        height: 100,
        lineHeight: 100,
        marginHorizontal: 15,
        marginVertical: 35,
        textAlign: 'center'
    },
    disabled: {
        opacity: 0.3
    }
})

export default RandomNumber
