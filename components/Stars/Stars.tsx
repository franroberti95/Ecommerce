import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types";

const Stars = ({quantity,totalQuantity}) =>
    <StarsContainer>
        {
            Array(totalQuantity)
                .fill("")
                .map((s,i) =>
                    <StyledStar active={i<quantity} className="material-icons">star</StyledStar>)
        }
    </StarsContainer>;

const StyledStar = styled.i`
    color: ${props => props.active ? "#FFB632":"rgba(0,0,0,0.3)"};
`;

const StarsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

Stars.propTypes = {
    quantity: PropTypes.number.isRequired,
    totalQuantity: PropTypes.number.isRequired
};

export default Stars