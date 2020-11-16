/*
* import React from "react"
import styled from "styled-components";
import PropTypes from "prop-types";
import Stars from "../Stars/Stars";
import strings from "../../localization/localization";

const Rate = ({itemRate,totalRate,votesQuantity}) =>
    <RateContainer>
        <Stars quantity={itemRate} totalQuantity={totalRate}/>
        <RateText>{itemRate}/{totalRate}</RateText>
        <Votes>{strings.votes}{votesQuantity}</Votes>
    </RateContainer>;

const RateText = styled.p`
`;
const Votes = styled.p`
`;

const RateContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

Rate.propTypes = {
    itemRate: PropTypes.number.isRequired,
    totalRate: PropTypes.number.isRequired,
    votesQuantity: PropTypes.number.isRequired
};

export default Rate
* */