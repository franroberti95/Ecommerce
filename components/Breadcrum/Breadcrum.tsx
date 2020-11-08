import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types";

const Breadcrumb = ({items = [],onItemClick = null, divider = "‣"}) =>
    <BreadcrumbContainer>
        {items.map((i,k) =>
            <>
                { k ? <StyledBullet className="material-icons">triangle</StyledBullet>:""}
                <StyledText
                    key={i.label}
                    onClick={onItemClick && onItemClick(i.value)}>
                    {i.label}
                </StyledText>
            </>)
        }
    </BreadcrumbContainer>;

const StyledBullet = styled.i`
`;

const StyledText = styled.p`
    font-size: 1em;
    cursor: pointer;
    
    &:last-child{
        color: rgba(0,0,0,0.3);
    }
`;

const BreadcrumbContainer = styled.div`
    display: flex;
    flex-direction: row;
`;


Breadcrumb.propTypes = {
    items: PropTypes.array.isRequired,
    onItemClick: PropTypes.func,
    divider: PropTypes.string.isRequired,
};

export default Breadcrumb