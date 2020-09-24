import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class Header extends React.Component {
    messageTarget = ''
    render() {
        return (
            <View>
               <Text style={styles.header}> {this.props.messageTarget}  </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        margin: 20,
        borderWidth: 4,
        borderRadius: 4,
        borderColor: '#a79086',
        borderBottomWidth: 5,
        shadowColor: '#a79086',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: '#6d031c',
        color: '#d2d2c9',
        padding: 15,
    }
})

export default Header
