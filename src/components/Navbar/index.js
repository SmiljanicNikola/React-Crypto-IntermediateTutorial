import React,{useState, useEffect} from 'react'
import { Nav } from './NavbarElements'
import { NavbarContainer } from './NavbarElements'
import { NavLogo } from './NavbarElements'
import { MobileIcon } from './NavbarElements'
import { NavMenu } from './NavbarElements'
import { NavItem,NavLinks,NavBtn,NavBtnLink } from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'


const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)

        }else{
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    },[])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        Dolla
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" 
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true'
                            offset={-80}
                            >About</NavLinks>{/*Spy cudan*/}
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" 
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true'
                            offset={-80}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" 
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true'
                            offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="sign-up"
                            smooth={true} 
                            duration={500} 
                            spy={true}
                            exact='true'
                            offset={-80}>Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>

                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
