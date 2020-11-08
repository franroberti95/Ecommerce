import React from "react"
import styled, {keyframes} from "styled-components";

const Loader = () => <LoaderContainer/>;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: ${rotate} 1.2s linear infinite;
`;

export default Loader