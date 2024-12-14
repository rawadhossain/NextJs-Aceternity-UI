import React from 'react';
import styled from 'styled-components';

export function ExploreButton({ children }: { children?: string }) {
    return (
        <StyledWrapper>
            <button>{children}</button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    button {
        font-size: 1.15rem;
        color: #fafafa;
        text-transform: uppercase;
        padding: 10px 20px;
        border-radius: 10px;
        border: 2px solid #fafafa;
        background: #252525;
        box-shadow: 3px 3px #fafafa;
        cursor: pointer;
        margin: 35px 0;
    }

    button:active {
        box-shadow: none;
        transform: translate(3px, 3px);
    }
`;

export default ExploreButton;
