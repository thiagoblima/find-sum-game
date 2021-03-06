import React from 'react'
import styled from 'styled-components/native'

const StyledView = styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
    opacity: 0.5;
    background-color:#a79086;
`

const StyledText = styled.Text`
    color:#a79086;
    background-color:#d2d2c9 ;
    border-radius: 50%;
    align-self: center;
    font-size: 32px;
    border-radius: 100%;
`


class Footer extends React.Component {
    remainingSeconds = 0
    render() {
        return (
            <StyledView>
                <StyledText> {this.props.remainingSeconds} </StyledText>
            </StyledView>
        )
    }
}


export default Footer
