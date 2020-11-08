import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';

const SearchInput = ({ placeholder,onSearch }) =>
    <SearchInputContainer placeholder={placeholder}>
        <Input onSearch={undefined}/>
        <StyledIcon onClick={onSearch} className="material-icons">search</StyledIcon>
    </SearchInputContainer>;

const StyledIcon = styled.i`
    cursor: pointer;
`;

const SearchInputContainer = styled.div`
    padding: 10px 16px;
    border-radius: 24px;
    background-color: rgba(0,0,0,0.1);    
    width: 263px;
    display: flex;
    flex-direction: row;
    justify-content: space-between
`;

const Input = styled.input`
    border: none;
    background-color: transparent;
    &:focus{
        outline: none;
    }
`;

SearchInput.propTypes = {
    onSearch: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};

export default SearchInput