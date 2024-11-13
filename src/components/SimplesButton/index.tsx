import React from 'react';
import * as S from './styles';

export const SimpleButton: React.FC = () => {
    return <S.StyledButton>Entrar</S.StyledButton>;
};

export const GrayButton: React.FC = () => {
    return <S.GrayButton>Entrar</S.GrayButton>;
};

export const OnButton: React.FC = () => {
    return (
        <S.OnButton>
            <img src="/assets/images/bx_home.png" alt="passaro" />
            Página Inicial
        </S.OnButton>
    );
};
export const BNot: React.FC = () => {
    return (
        <S.BNot>
            <img
                src="/assets/images/ic_outline-notifications.png"
                alt="passaro"
            />
            Notificações
        </S.BNot>
    );
};
export const BMensagens: React.FC = () => {
    return (
        <S.BNot>
            <img src="/assets/images/jam_messages-alt.png" alt="mens" />
            Mensagens
        </S.BNot>
    );
};
export const BSalvos: React.FC = () => {
    return (
        <S.BSalvos>
            <img src="assets/images/Cloud_Check.png" alt="salvos" />
            Salvos
        </S.BSalvos>
    );
};
export const BPerfil: React.FC = () => {
    return (
        <S.BPerfil>
            <img src="/assets/images/pajamas_profile.png" alt="perfil" />
            Perfil
        </S.BPerfil>
    );
};
export const BConfiguracoes: React.FC = () => {
    return (
        <S.BConfiguracoes type="button">
            <img src="assets/images/akar-icons_gear.png" alt="config" />
            Configurações
        </S.BConfiguracoes>
    );
};
export const OuvirPiu: React.FC = () => {
    return (
        <S.OuvirPiu>
            <S.PiuPesquisa type="text" placeholder="Ouvir um piu..." />
            <S.Anexos>
                <S.Send src="/assets/images/ci_search.png" alt="pesquisa" />
            </S.Anexos>
        </S.OuvirPiu>
    );
};
export const DarPiu: React.FC = () => {
    return (
        <S.DarPiu>
            <S.PiuTexxt type="text" placeholder="Quero dar um piu..." />
            <S.Anexos>
                <S.Imagens src="/assets\images\Image_02.png" alt="fotos" />
                <S.Imagens src="/assets\images\Video.png" alt="videos" />
                <S.Imagens src="/assets\images\frame-2.png" alt="pessoas" />
                <S.Imagens src="/assets\images\Tag.png" alt="aa" />
                <S.Imagens src="/assets\images\Frame-3.png" alt="aaa" />
                <S.Send src="/assets\images\Paper_Plane.png" alt="send" />
            </S.Anexos>
        </S.DarPiu>
    );
};

export const Ppiu: React.FC = () => {
    return (
        <S.Ppiu>
            <img src="/assets\images\chick-svgrepo-com-2.png" alt="passaro" />
            PIUPIUWER
        </S.Ppiu>
    );
};
export const PiusAlta: React.FC = () => {
    return (
        <S.PiusAlta>
            <img src="/assets\images\Frame.png" alt="alt" />
            Pius em alta
        </S.PiusAlta>
    );
};
export const Hr: React.FC = () => {
    return <S.Hr />;
};

export const Divisao: React.FC = () => {
    return <S.Divisao />;
};

export const Pius: React.FC = () => {
    return (
        <S.Pius>
            <S.ImgPerfil
                src="/assets\images\pedro-parente.png"
                alt="ftperfil"
            />
            <S.ContPiu>
                <S.PiuHeader>
                    <S.PiuName>
                        Heitor Zimbrão
                        <S.PiuArroba>@heitorzimbrao</S.PiuArroba>
                    </S.PiuName>
                </S.PiuHeader>
                <S.PiuText>
                    Po daqui 2 semanas vai vir uma bomba de semana de prova.
                    Melhor Estudar pra Caramba! Amassar essas provas da Escola
                    Politécnica.
                    <S.Botoes>
                        <S.ActionButton>
                            <S.RePiu
                                src="/assets\images\icons8-retuitar-48.png"
                                alt="ret"
                            />
                        </S.ActionButton>
                        <S.ActionButton>
                            <S.MePiu
                                src="/assets\images\Chat_Circle.png"
                                alt="mensagens"
                            />
                        </S.ActionButton>
                        <S.ActionButton>
                            <S.Curtida
                                src="/assets\images\Heart_02.png"
                                alt="curtida"
                            />
                        </S.ActionButton>
                    </S.Botoes>
                </S.PiuText>
            </S.ContPiu>
        </S.Pius>
    );
};

export const PiuTrend: React.FC = () => {
    return <S.PiuTrend />;
};
