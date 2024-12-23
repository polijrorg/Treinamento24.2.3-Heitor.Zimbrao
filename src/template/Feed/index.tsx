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
    Pius,
    PiusAlta,
    Divisao,
    PiuTrend
} from 'components/SimplesButton';
import * as S from './styles';

const HomeTemplate = () => {
    return (
        <S.Container>
            <S.LEsquerda>
                <S.Sidebar>
                    <Ppiu />
                    <OnButton />
                    <BNot />
                    <BMensagens />
                    <BSalvos />
                    <BPerfil />
                    <BConfiguracoes />
                </S.Sidebar>
            </S.LEsquerda>
            <S.Centro>
                <OuvirPiu />
                <DarPiu />
                <Hr />
                <Pius />
            </S.Centro>
            <S.LDireita>
                <PiusAlta />
                <Divisao />
                <PiuTrend />
            </S.LDireita>
        </S.Container>
    );
};
export default HomeTemplate;
