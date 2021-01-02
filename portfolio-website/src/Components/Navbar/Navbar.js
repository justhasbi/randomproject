import React, { Fragment, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    NavSpan, 
    MobileIcon, 
    MobileIconContainer, 
    NavMenu,
    NavItem,
    NavLinks,
    NavLinksHighlight
} from './Navbar.elements';


const Navbar = () => {
    const [click, setClick] = useState()

    const handleClick = () => setClick(!click) // true

    return (
        <Fragment>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        EKSO<NavSpan>CODE</NavSpan>
                    </NavLogo>
                    {/* burger icon */}
                    <MobileIconContainer>
                        <MobileIcon onClick={handleClick}>
                            {
                                click ? <FaTimes /> : <FaBars />
                            }
                        </MobileIcon>
                    </MobileIconContainer>

                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/portfolio'>Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinksHighlight to='/contact'>Contact me</NavLinksHighlight>
                        </NavItem>
                    </NavMenu>

                </NavbarContainer>
            </Nav>
        </Fragment>
    )
}

export default Navbar
