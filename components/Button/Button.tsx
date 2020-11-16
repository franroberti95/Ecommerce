import React from "react"
import styled, {keyframes} from "styled-components"
import PropTypes from "prop-types";
import Loader from "../Loader/Loader";

const Button = ({children = null, loading = false, disabled = false, onClick = null, color = null,}) =>{

    function createRipple(event) {
        const button = event.currentTarget;

        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) ripple.remove();

        button.appendChild(circle);
        onClick && onClick();
    }

    return <ButtonContainer disabled={loading || disabled} onClick={createRipple}>
        {loading && <Loader/>}
        <StyledButtonText>
            {children}
        </StyledButtonText>
    </ButtonContainer>
};

const ripple = keyframes`
    to {
        transform: scale(4);
        opacity: 0;
    }
`;

const StyledButtonText = styled.p`
    margin: 0;
`;

const ButtonContainer = styled.button`
    position: relative;
    overflow: hidden;
    transition: background 400ms;
    color: #fff;
    background-color: black;
    padding: 0.5rem 2rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    outline: 0;
    border: 0;
    border-radius: 15px;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
        cursor: pointer;
    
    &[disabled]{
        cursor: default;
    }
    
    &:focus{
        outline: none;
    }
    
    span.ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ${ripple} 600ms linear;
        background-color: rgba(255, 255, 255, 0.7);
    }
`;

Button.propTypes = {
    children: PropTypes.node.isRequired,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    color: PropTypes.string
};

export default Button