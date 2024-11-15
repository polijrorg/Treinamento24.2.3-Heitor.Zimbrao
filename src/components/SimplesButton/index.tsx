import React, { useState } from 'react';
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
                <S.Send>
                    <img src="/assets/images/ci_search.png" alt="pesquisa" />
                </S.Send>
            </S.Anexos>
        </S.OuvirPiu>
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
    const [pius] = useState([
        {
            Piuname: 'Pedro Parente',
            PiuArroba: '@Pedropapers',
            ImgPerfil: '/assets/images/file-_2_.png',
            PiuText:
                'Mano, esse enem tinha umas questoes de fuder. Disseram que pelo contexto a nota de corte diminua e a quantidade de acertos pra passar em med abaixe'
        },
        {
            Piuname: 'Victor V',
            PiuArroba: 'vitao?',
            ImgPerfil: '/assets/images/file.png',
            PiuText:
                'po, mano. quero ficar rico do dia pra noite, vamo começar a fazer uma máquina de dinheiro. Enem é o meu p*** quero mesmo é fazer mkt digital. Vou comecar um plr essa semana ai'
        },
        {
            Piuname: 'Marco Tulio',
            PiuArroba: 'marocaroca',
            ImgPerfil: '/assets/images/file-_1_.png',
            PiuText:
                'hoje a noite eu to pro crime, aonde é o after? vou pra casa do ca***** beber até esquecer o vestibular'
        }
    ]);

    const [curtida, setCurtida] = useState(0);
    const [isCurtido, setIsCurtido] = useState(false);
    const [repiu, setRepiu] = useState(0);
    const [isRePiu, setIsRepiu] = useState(false);
    const [coment, setComent] = useState(0);
    const handleCurtidaClick = () => {
        if (isCurtido) {
            setCurtida(curtida - 1);
        } else {
            setCurtida(curtida + 1);
        }
        setIsCurtido(!isCurtido);
    };
    const handleRePiu = () => {
        if (isRePiu) {
            setRepiu(repiu - 1);
        } else {
            setRepiu(repiu + 1);
        }
        setIsRepiu(!isRePiu);
    };
    const handleComent = () => {
        setComent(coment + 1);
    };

    return (
        <div>
            {pius.map(({ Piuname, PiuArroba, ImgPerfil, PiuText }) => (
                <S.Pius key="index">
                    <S.ImgPerfil src={ImgPerfil} alt="ftperfil" />
                    <S.ContPiu>
                        <S.PiuHeader>
                            <S.PiuName>
                                {Piuname}
                                <S.PiuArroba>{PiuArroba}</S.PiuArroba>
                            </S.PiuName>
                        </S.PiuHeader>
                        <S.PiuText>
                            {PiuText}
                            <S.Botoes>
                                <S.ActionButton onClick={() => handleRePiu()}>
                                    <S.RePiu
                                        src="/assets/images/Arrow_Reload_02.png"
                                        alt="ret"
                                    />
                                    <span>{repiu}</span>
                                </S.ActionButton>
                                <S.ActionButton onClick={() => handleComent()}>
                                    <S.MePiu
                                        src="/assets/images/Chat_Circle.png"
                                        alt="mensagens"
                                    />
                                    <span>{coment}</span>
                                </S.ActionButton>
                                <S.ActionButton
                                    onClick={() => handleCurtidaClick()}
                                >
                                    <S.Curtida
                                        src="/assets/images/Heart_02.png"
                                        alt="curtida"
                                    />
                                    <span>{curtida}</span>
                                </S.ActionButton>
                            </S.Botoes>
                        </S.PiuText>
                    </S.ContPiu>
                </S.Pius>
            ))}
        </div>
    );
};

export const DarPiu: React.FC = () => {
    const [pius, setPius] = useState('');
    const [novoPiuText, setNovoPiuText] = useState('');
    const handleNovoPiu = () => {
        if (novoPiuText.trim() === '') return;

        const novoPiu = [
            {
                Piuname: 'Heitor Zimbrão',
                PiuArroba: '@heitorzimbrao',
                ImgPerfil: '/assets/images/pedro-parente.png',
                PiuText: novoPiuText
            }
        ];
        setNovoPiuText('');
    };
    return (
        <S.DarPiu>
            <S.PiuTexxt
                type="text"
                placeholder="Quero dar um piu..."
                value={novoPiuText}
                onChange={(event) => setNovoPiuText(event.target.value)}
            />
            <S.Anexos>
                <S.Imagens src="/assets\images\Image_02.png" alt="fotos" />
                <S.Imagens src="/assets\images\Video.png" alt="videos" />
                <S.Imagens src="/assets\images\frame-2.png" alt="pessoas" />
                <S.Imagens src="/assets\images\Tag.png" alt="aa" />
                <S.Imagens src="/assets\images\Frame-3.png" alt="aaa" />
                <S.Send onClick={handleNovoPiu}>
                    <img src="/assets/images/Paper_Plane.png" alt="send" />
                </S.Send>
            </S.Anexos>
        </S.DarPiu>
    );
};
export const PiuTrend: React.FC = () => {
    const Trends = [
        {
            PiuTrendImage: '/assets/images/GcUAaY7XAAAqbMH.png',
            PiuTrendHeader: 'Acidente!',
            PiuTrendText:
                'Passageira derruba panela com feijoada dentro e deixa motorista'
        },
        {
            PiuTrendImage:
                '/assets/images/Raphinha-comemora-gol-marcado-pelo-Brasil-contra-a-Venezuela-pelas-Eliminatorias-1920x1280.png',
            PiuTrendHeader: 'GOLLLL!!!',
            PiuTrendText:
                'Mesmo com a seleção jogando mal pra cara***, temos um golaço'
        },
        {
            PiuTrendImage: '/assets/images/GcWkj9aXoAASF0t.png',
            PiuTrendHeader: 'Passado Posto à Tona',
            PiuTrendText:
                'Jovem tira foto no instante em que avião colide com um prédio, o mesmo garoto no futuro voa alto'
        },
        {
            PiuTrendImage: '/assets/images/GcQqG2aa4AA2rN9.png',
            PiuTrendHeader: 'Trânsito complicado',
            PiuTrendText:
                'Motorista sem óculos bate em poste parado e quase perde a vida'
        }
    ];
    return (
        <div>
            {Trends.map(({ PiuTrendImage, PiuTrendHeader, PiuTrendText }) => (
                <S.PiuTrend>
                    <S.PiuTrendImage src={PiuTrendImage} alt="trends" />
                    <S.Piutrenddiv>
                        <S.PiuTrendHeader>{PiuTrendHeader}</S.PiuTrendHeader>
                        <S.PiuTrendText>{PiuTrendText}</S.PiuTrendText>
                    </S.Piutrenddiv>
                </S.PiuTrend>
            ))}
        </div>
    );
};
