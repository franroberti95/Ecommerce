import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types";

const Price = ({price = null,oldPrice = null}) =>
    <PriceContainer>
        <MainPrice>${price}</MainPrice>
        {oldPrice && <OldPrice>${oldPrice}</OldPrice>}
    </PriceContainer>;

const MainPrice = styled.p`
    font-size: 2rem;
    margin: 0;
    margin-right: 30px;
`;

const OldPrice = styled.p`
    text-decoration: line-through;
    margin: 0;
    color: rgba(0,0,0,0.3);
`;

const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
`;

Price.propTypes = {
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
};

export default Price