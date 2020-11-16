import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types";
import TopBar from "../../components/TopBar/TopBar";
import theme from "../../theme/theme";
import Rate from "../../components/Rate/Rate";
import ColorPicker from "../../components/ColorPicker/ColorPicker";
import SizePicker from "../../components/SizePicker/SizePicker";
import Button from "../../components/Button/Button";
import ThreeDRender from "../../components/ThreeDRender/ThreeDRender";

const ProductLayout = ({}) =>
    <ProductContainer>
        <MainContainer/>
        <TopContainer>
            <TopBarContainer>
                <TopBar
                    categories={[{label:"RUNNING"},{label:"BASKETBALL"}]}
                    rightIcon={<StyledHeart className="material-icons">favorite</StyledHeart>}
                />
            </TopBarContainer>
            <ProductMediaContainer>
                <ThreeDRender/>
            </ProductMediaContainer>
            <RateContainer>
                <Rate itemRate={4} totalRate={5}/>
            </RateContainer>
            <SpaceContainer/>
            <BuyInfoContainer>
                <ColorPicker options={[{value: "blue",color: "blue"},{value: "orange",color: "white"}]}/>
                <ProductTitleContainer>
                    <ProductTitle>Nike running shoes</ProductTitle>
                    <ProductPrice>$5000</ProductPrice>
                </ProductTitleContainer>
            </BuyInfoContainer>
        </TopContainer>
        <BottomContainer>
            <SizePicker value={24}/>
            <Button
                color={"black"}
            >
                Add to cart
            </Button>
        </BottomContainer>
    </ProductContainer>;

const TopBarContainer = styled.div`grid-area: top-bar;`;
const ProductMediaContainer = styled.div`grid-area: product-media;`;
const RateContainer = styled.div`grid-area: rate;`;
const BuyInfoContainer = styled.div`grid-area: buy-info;`;
const SpaceContainer = styled.div`grid-area: space;`;

const ProductTitleContainer = styled.div` display: flex; flex-direction: row; justify-content: space-between; align-items: center; `;
const ProductTitle = styled.p` margin: 0; color: ${theme.colors.lightGrey1}; 
    font-size: 1.5em;`;
const ProductPrice = styled.p` 
    margin: 0; 
    color: ${theme.colors.primary};
    font-size: 2em;
    font-weight: bold;    
`;

const BottomContainer = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    padding: 0 15px;
    display: flex;
    flex-direction row;
    justify-content: space-around;
    align-items: center;
`;

const TopContainer = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.6fr 2.3fr 0.9fr 0.4fr 0.8fr;
    gap: 0px 0px;
    grid-template-areas:
        "top-bar"
        "product-media"
        "rate"
        "space"
        "buy-info";
    padding: 0 15px;
    border-bottom-right-radius: 45px;
    border-bottom-left-radius: 45px;
    background-color: black;
`;

const MainContainer = styled.div`
    background: ${theme.colors.primary};
    grid-area: 1 / 1 / 3 / 2;
`;

const ProductContainer = styled.div`
    background: ${theme.colors.primary};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.6fr 0.4fr;
    gap: 0px 0px;
    height: 100vh;
`;
const StyledHeart = styled.div` 
    font-size: 2em;
    color: ${theme.colors.lightGrey1};
`;

ProductLayout.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node,
    pic: PropTypes.node
};

export default ProductLayout