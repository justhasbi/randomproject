import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, HiglightLink } from '../../globalStyles'; 

export const Nav = styled.nav`
    background: #1D2B32; 
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    // Container get from global style
    ${Container}
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
`;

export const NavSpan = styled.span`
    font-weight: bold;
`;

export const MobileIconContainer = styled.div`
    display: none;
    @media screen and (max-width: 960px) {
        display:block;
        position: absolute;
        right: 0;
        cursor: pointer;
    }
`;

export const MobileIcon = styled.div`
    cursor: pointer;
    font-size: 1.8rem;
    transform: translate(-100%, 60%);
    color: #fff;
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 70px;
        // user destructuring 
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #112229;
    }
`;

// this style is useless
export const NavItem = styled.li`
    margin: 20px 0;
    display: flex;
`;

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
`;

export const NavLinksHighlight = styled(HiglightLink)`
   ${HiglightLink}
`;

