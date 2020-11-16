import React from "react"
import styled from "styled-components";
import PropTypes from "prop-types";
import Stars from "../Stars/Stars";
import theme from "../../theme/theme";

const Rate = ({itemRate,totalRate}) =>
    <RateContainer>
        <Parallelogram><ParallelogramText>{itemRate}</ParallelogramText></Parallelogram>
        <StarsContainer><Stars quantity={itemRate} totalQuantity={totalRate}/></StarsContainer>
    </RateContainer>;

const RateContainer= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;
const StarsContainer = styled.div`
   width: 150px; 
   height: 50px; 
   background: ${theme.colors.grey1};
   transform: skew(-20deg); 
   display: flex;
   align-items: center;
   justify-content: center;
`;


const Parallelogram = styled.div`
   width: 80px; 
   height: 80px; 
   background: ${theme.colors.primary};
   transform: skew(-20deg);
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
`;

const ParallelogramText = styled.p`
   color: white;
   font-size: 2.5em;
    transform: skew(20deg);
`;
Rate.propTypes = {
    itemRate: PropTypes.number.isRequired,
    totalRate: PropTypes.number.isRequired
};

export default Rate