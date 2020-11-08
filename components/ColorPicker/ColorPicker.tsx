import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types";
import Picker from "../Picker/Picker";
import strings from "../../localization/localization";

const ColorPicker = ({value = null, onChange = null, options = []}) =>
    <Picker
        label={strings.color}
        inputComponent={
            <PickerContainer>
                {
                    options.map(opt =>
                        <ColorCircle key={opt.value} color={opt.color} onClick={()=> onChange(opt)}>
                            {value === opt.value ? <StyledCheck className="material-icons">check</StyledCheck>:""}
                        </ColorCircle>)
                }
            </PickerContainer>
        }
    />;

const StyledCheck = styled.i`
    color: white;
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

const PickerContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #EDEDED;
    box-sizing: border-box;
    border-radius: 21px;
    width: fit-content;
    padding: 9px 10px;
`;

ColorPicker.propTypes = {
    value: PropTypes.any.isRequired,
    onChange: PropTypes.node.isRequired,
    options: PropTypes.array.isRequired
};

export default ColorPicker