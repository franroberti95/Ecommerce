import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types";

const Picker = ({label = null,inputComponent = null}) =>
    <PickerContainer>
        <Label>{label}</Label>
        {inputComponent}
    </PickerContainer>;

const Label = styled.p`
    font-size: 1.5rem;
`;

const PickerContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

Picker.propTypes = {
    label: PropTypes.string.isRequired,
    inputComponent: PropTypes.node.isRequired,
};

export default Picker