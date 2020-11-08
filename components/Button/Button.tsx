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
        {children}
    </ButtonContainer>
};

const ripple = keyframes`
    to {
        transform: scale(4);
        opacity: 0;
    }
`;

const ButtonContainer = styled.button`

    position: relative;
    overflow: hidden;
    transition: background 400ms;
    color: #fff;
    background-color: #6200ee;
    padding: 1rem 2rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    outline: 0;
    border: 0;
    border-radius: 100px;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3); /* black with 30% opacity */
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