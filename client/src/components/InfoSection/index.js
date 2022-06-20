import React from 'react'
import { useSelector } from 'react-redux'
import { Button, ButtonR } from '../ButtonElements'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Text,
    ImgWrap,
    Img,
} from './InfoElements'

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2,
    button
}) => {
    const user = useSelector(state => state)
    
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button
                                        to='home'
                                        smooth='true'
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                        display={button ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                                    {(!user.isLogged)
                                        ?
                                        <ButtonR
                                            to='/signup'
                                            smooth='true'
                                            duration={500}
                                            spy='true'
                                            exact='true'
                                            offset={-80}
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            dark2={dark2 ? 1 : 0}
                                            display={button ? 1 : 0}
                                        >{buttonLabel}
                                        </ButtonR>
                                        :
                                        <Text darkText={darkText} display={button ? 1 : 0}>Olá {user.user}!</Text>
                                    }
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection