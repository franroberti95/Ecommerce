import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const IconCounter = ({counter = 0}) =>
    <IconCounterContainer>
        <IconContainer>
            <StyledIcon className="material-icons">cart</StyledIcon>
        </IconContainer>
        <CountContainer>
            {counter}
        </CountContainer>
    </IconCounterContainer>;

const IconCounterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const IconContainer = styled.div`
    display: flex;
`;
const StyledIcon = styled.i`
    display: flex;
`;
const CountContainer = styled.div`
    border-radius: 50%;
    background-color: #ECEFF2;
    height: 24px;
    width: 24px;
    display: grid;
    align-content: center;
`;

IconCounter.propTypes = {
    counter: PropTypes.number.isRequired
};

export default IconCounter