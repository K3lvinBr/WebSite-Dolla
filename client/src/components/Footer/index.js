import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Sobre nós</FooterLinkTitle>
                            <FooterLink to='/signin'>Como funciona</FooterLink>
                            <FooterLink to='/signin'>Depoimentos</FooterLink>
                            <FooterLink to='/signin'>Carreiras</FooterLink>
                            <FooterLink to='/signin'>Investidores</FooterLink>
                            <FooterLink to='/signin'>Termos de serviços</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Vídeos</FooterLinkTitle>
                            <FooterLink to='/signin'>Enviar vídeo</FooterLink>
                            <FooterLink to='/signin'>Embaixadores</FooterLink>
                            <FooterLink to='/signin'>Agência</FooterLink>
                            <FooterLink to='/signin'>Influenciador</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contate-nos</FooterLinkTitle>
                            <FooterLink to='/signin'>Contato</FooterLink>
                            <FooterLink to='/signin'>Suporte</FooterLink>
                            <FooterLink to='/signin'>Destinos</FooterLink>
                            <FooterLink to='/signin'>Patrocínios</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Mídia social</FooterLinkTitle>
                            <FooterLink to='/signin'>Instagram</FooterLink>
                            <FooterLink to='/signin'>Facebook</FooterLink>
                            <FooterLink to='/signin'>Youtube</FooterLink>
                            <FooterLink to='/signin'>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>dolla © {new Date().getFullYear()} Todos os direitos reservados.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://www.facebook.com' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.instagram.com' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.youtube.com' target='_blank' aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='https://twitter.com' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.linkedin.com' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer