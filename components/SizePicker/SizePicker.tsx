import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types";
import strings from "../../localization/localization";
import theme from "../../theme/theme";

const SizePicker = ({value = null, onChange = null, options = []}) =>
    <PickerContainer>
        <SizeLabel>{strings.size}</SizeLabel>
        <SizeContainer>
            <SizeValueText>
                {value}
            </SizeValueText>
        </SizeContainer>
    </PickerContainer>;

const SizeLabel = styled.p`
    color: black;
    font-size: 1.2em;
    margin-right: 20px;
    margin: 0;
    font-weight: bold;
`;

const PickerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SizeContainer = styled.div`
    cursor: pointer;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
`;

const SizeValueText  = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
`;

SizePicker.propTypes = {
    value: PropTypes.any.isRequired,
    onChange: PropTypes.node.isRequired,
    options: PropTypes.array.isRequired
};

export default SizePicker