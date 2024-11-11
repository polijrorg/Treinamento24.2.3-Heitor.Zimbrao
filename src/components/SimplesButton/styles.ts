import styled from 'styled-components';

export const Container2 = styled.div``;

export const StyledButton = styled.button`
    display: flex;
    width: 608px;
    height: 54px;
    padding: 11px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: none;
    background: #004c97;
    color: white;
    margin-top: 10px;
    border-radius: 16px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
`;

export const GrayButton = styled(StyledButton)`
    background-color: #4c5155;
    padding: 8px;
    border-radius: 8px;
    justify-content: space-between;
    color: #ecedee;
    display: flex;
    align-items: center;
    border: none;
    &:focus {
        border: none;
        outline: none;
    }
`;
