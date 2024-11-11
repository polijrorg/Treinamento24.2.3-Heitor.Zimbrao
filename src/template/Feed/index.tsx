import ExampleComponent from 'components/ExampleComponent';
import React from 'react';
import { GrayButton, SimpleButton } from 'components/SimplesButton';

import * as S from './styles';

const HomeTemplate = () => {
    return (
        <S.Container>
            <S.LEsquerda>
                <S.Login>
                    <h1>Login</h1>
                    <GrayButton />
                    <S.EsqueceuSenha>
                        <a
                            href="https://www.netflix.com/br/login"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Esqueceu a Senha?
                        </a>
                    </S.EsqueceuSenha>
                    <S.LoginButton2>
                        <SimpleButton />
                    </S.LoginButton2>
                </S.Login>
            </S.LEsquerda>
            <S.LDireita>
                <h1>img</h1>
            </S.LDireita>
            <ExampleComponent width="128px" />
        </S.Container>
    );
};
export default HomeTemplate;
