import styled from 'styled-components';

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;
    font-weight: 800;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 21% 55% 24%;
    min-height: 100vh;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.sky1};
    position: relative;
`;

export const LEsquerda = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--Slate-2, #1a1d1e);
    border-right: 1px solid var(--Slate-8, #4c5155);
    height: 100%;
    align-items: left;
    justify-content: left;
    color: white;
`;
export const Centro = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--Slate-1, #151718);
    padding: 32px;
    height: 100%;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const LDireita = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 1px solid var(--Slate-8, #4c5155);
    background: var(--Slate-2, #1a1d1e);
`;

export const Comment = styled.p`
    color: ${({ theme }) => theme.colors.slate11};
    font-size: 28px;
`;

export const Login = styled.div`
    position: relative;
    width: 608px;
    height: 441px;
    gap: 48px;
    top: 20px;
    right: 20px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 25px;
`;

export const LoginButton2 = styled.div`
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 30px;
    border: none;
`;

export const Email = styled.div`
    width: 608px;
    height: 137px;
    gap: 16px;
`;
export const EsqueceuSenha = styled.div`
    margin-top: 15px;

    a {
        color: #004c97;
        text-decoration: none;
        font-size: 14px;

        &:hover {
            text-decoration: underline;
        }
    }
`;
