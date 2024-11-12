import React from 'react';
import {
    OnButton,
    BNot,
    BMensagens,
    BSalvos,
    BPerfil,
    BConfiguracoes,
    OuvirPiu,
    DarPiu,
    Ppiu,
    Hr,
    Pius
} from 'components/SimplesButton';
import * as S from './styles';

const HomeTemplate = () => {
    return (
        <S.Container>
            <S.LEsquerda>
                <Ppiu />
                <OnButton />
                <BNot />
                <BMensagens />
                <BSalvos />
                <BPerfil />
                <BConfiguracoes />
            </S.LEsquerda>
            <S.Centro>
                <OuvirPiu />
                <DarPiu />
                <Hr />
                <Pius />
                <Pius />
                <Pius />
                <Pius />
            </S.Centro>
            <S.LDireita>
                <OnButton />
            </S.LDireita>
        </S.Container>
    );
};
export default HomeTemplate;
