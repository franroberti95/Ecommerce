import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types";
import Stars from "../../components/Stars/Stars";

const ProductLayout = ({left,right,pic}) =>
    <GridContainer>
        <Left>{left}</Left>
        <Pic>{pic}</Pic>
        <Right>{right}</Right>
    </GridContainer>;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 0.5fr 2fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    height: 100vh;
`;
const Pic = styled.div` 
    grid-area: 2 / 2 / 3 / 3;
`;
const Left = styled.div`
    grid-area: 1 / 1 / 4 / 3;
    background-color: #1C2431;
`;
const Right = styled.div`
    grid-area: 1 / 3 / 4 / 4;
`;

ProductLayout.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node,
    pic: PropTypes.node
};

export default ProductLayout