import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../userSlice'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    const user = useSelector(state => state.isLogged)

    const dispatch = useDispatch()

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        to='about'
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Sobre
                    </SidebarLink>
                    <SidebarLink
                        to='discover'
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Explorar
                    </SidebarLink>
                    <SidebarLink
                        to='services'
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Serviços
                    </SidebarLink>
                    <SidebarLink
                        to='signup'
                        onClick={toggle}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Inscreva-se
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute
                        to={user ? '/' : '/signin'}
                        onClick={() => dispatch(logout())}
                        user={user ? 1 : 0}
                        replace
                    >
                        {user ? 'Sair' : 'Entrar'}
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar