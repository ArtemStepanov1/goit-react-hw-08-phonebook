import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const UserName = styled.p`
    font-weight: 700;
    font-size: 24px;
`;

export const LogOutBtn = styled.button`
    border: 2px solid lightgray;
    border-radius: 4px;
    font-size: 24px;
    font-weight: 700;
    &:hover {border: 2px solid springgreen};
`;