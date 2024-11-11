import React from 'react';
import * as S from './styles';

export const SimpleButton: React.FC = () => {
    return <S.StyledButton>Entrar</S.StyledButton>;
};

export const GrayButton: React.FC = () => {
    return (
        <S.Container2>
            <S.GrayButton>
                <input
                    type="text"
                    placeholder="celular, e-mail ou nome de usuário"
                    style={{
                        background: '#4c5155',
                        border: 'none',
                        padding: '10px',
                        borderRadius: '5px',
                        color: '#333',
                        fontSize: '16px'
                    }}
                />
            </S.GrayButton>
            <S.GrayButton>
                <input
                    type="text"
                    placeholder="Senha"
                    style={{
                        background: '#4c5155',
                        border: 'none',
                        padding: '10px',
                        borderRadius: '5px',
                        color: '#333',
                        fontSize: '16px'
                    }}
                />
            </S.GrayButton>
        </S.Container2>
    );
};
