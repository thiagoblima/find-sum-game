import React from 'react'
import PropTypes from 'prop-types'
import {Text, StyleSheet} from 'react-native'

class RandomNumber extends React.Component {
    static propTypes = {
        number: PropTypes.number.isRequired
    }
    render() {
        return (
            <Text style={styles.random}> {this.props.number}</Text>
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
    }
})

export default RandomNumber
