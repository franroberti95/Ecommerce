import React from "react"
import styled from "styled-components"
import theme from "../../theme/theme"

const TopBar = ({categories,rightIcon}) =>
    <TopBarContainer>
        <CategoriesContainer>
            {
                categories.map( c => <Category><CategoryText key={c.label}>{c.label}</CategoryText><CategoryDash/></Category> )
            }
        </CategoriesContainer>
        {rightIcon}
    </TopBarContainer>;


const CategoryDash = styled.div`
    width: 35px;
    height: 5px;
    border-radius: 5px;
    background: ${theme.colors.lightGrey2};
`;

const Category = styled.div`
    display: flex;
    flex-direction: column;
`;

const TopBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CategoryText = styled.p`
    margin-right: 15px;
    margin-bottom: 0;
    font-size: 1.5em;
    color: ${theme.colors.lightGrey1};
`;

const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
`;

export default TopBar