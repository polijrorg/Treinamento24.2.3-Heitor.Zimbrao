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

export const OnButton = styled.button`
    display: flex;
    height: 57px;
    padding: 0px 20px;
    gap: 10px;
    border-radius: 0px 80px 80px 0px;
    background: var(--Indigo-9, #3e6ddd);
    border: none;
    align-items: center;
    justify-content: left;
    color: white;
    font-size: 18px;
    font-weight: 550;
    line-height: normal;
    font-style: normal;
    margin-right: 20px;
    margin-top: 40px;
    &:hover {
        background-color: #3e6ddd; /* Cor ao passar o mouse */
    }

    &:active {
        background-color: #3e6ddd; /* Cor ao clicar */
    }
`;
export const BNot = styled(OnButton)`
    margin-top: 16px;
    background: var(--Slate-2, #1a1d1e);
`;

export const BMensagens = styled(BNot)``;
export const BSalvos = styled(BNot)``;
export const BPerfil = styled(BNot)``;
export const BConfiguracoes = styled(BNot)``;

export const OuvirPiu = styled.input`
    display: flex;
    padding: 8px;
    justify-content: space-between;
    align-items: right;
    align-self: stretch;
    border-radius: 8px;
    background: var(--Slate-8, #4c5155);
    height: 40px;
    border: none;
    margin-top: 32px;
    &:focus {
        color: white;
        border: none;
    }
`;
export const DarPiu = styled(OuvirPiu)`
    height: 152px;
    margin-bottom: 40px;
`;
export const Ppiu = styled(BNot)`
    font-size: 36px;
    align-items: center;
    font-weight: 500px;
    margin-top: 16px;
    margin-left: 16px;
    &:hover {
        background-color: #1a1d1e;
    }
`;

export const Hr = styled.div`
    border: none;
    border-top: 1px solid #ccc;
    margin-left: 20px;
    margin-right: 20px;
    width: 100%;
`;

export const Pius = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-radius: 16px;
    background: var(--Slate-3, #202425);
    margin-top: 46px;
    height: 251px;
`;

export const ImgPerfil = styled.img`
    width: 80px;
    height: 80px;
    margin-right: 12px;
    border-radius: 50px;
    border: 4px solid var(--Institutional-Blue-Fade, #004c97);
    padding: 8px;
`;
export const ContPiu = styled.div`
    display: flex;
    flex-direction: column;
`;
export const PiuHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const PiuArroba = styled.div`
    display: flex;
    align-items: left;
    font-size: 14px;
    line-height: 24px;
    font-style: normal;
`;
export const PiuName = styled.span`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    margin-right: 8px;
    color: white;
    font-size: 18px;
    justify-content: center;
    margin: 10px;
    line-height: normal;
    font-style: normal;
    font-weight: 500;
`;
export const PiuText = styled.div`
    color: var(--Slate-12, #ecedee);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: -100px;
    margin-top: 24px;
`;
