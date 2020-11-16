import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types";
import strings from "../../localization/localization";
import theme from "../../theme/theme";

const ColorPicker = ({value = null, onChange = null, options = []}) =>
    <PickerContainer>
        <ColorLabel>{strings.colors}</ColorLabel>
        {
            options.map( opt => <ColorCircle active={opt.value === value} color={opt.color}/>)
        }
    </PickerContainer>;

const ColorLabel = styled.p`
    color: ${theme.colors.lightGrey1};
    font-size: 1.5em;
    margin-right: 20px;
    margin-bottom: 0;
    margin-top: 0;
`;

const PickerContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ColorCircle = styled.div`
    cursor: pointer;
    border-radius: 50%;
    background-color: ${props => props.color};
    width: 24px;
    height: 24px;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    
    &:last-child{
        margin-right: 0;
    }
`;

ColorPicker.propTypes = {
    value: PropTypes.any.isRequired,
    onChange: PropTypes.node.isRequired,
    options: PropTypes.array.isRequired
};

export default ColorPicker