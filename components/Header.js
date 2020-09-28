import React from 'react'
import {View} from 'react-native'
import styled from 'styled-components/native'

const StyledHeader = styled.Text`
    transition: 500ms ease-in-out;
    border-radius: 10%;
    border-color: #a79086;
    border-width: 12px,
    border-bottom: 12px
    shadow-color: #a79086;
    shadow-offset:  8px;
    shadow-opacity: 0.7;
    shadow-radius: 2;
    elevation: 1;
    font-size: 30px;
    text-align: center;
    background-color: #6d031c;
    color: #d2d2c9;
    margin: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    overflow: hidden;
`

class Header extends React.Component {
    messageTarget = ''
    render() {
        return (
            <View>
                <StyledHeader> {this.props.messageTarget} </StyledHeader>
            </View>
        )
    }
    componentDidMount() {
        StyledHeader
    }
}

export default Header
