import React from 'react'
import NavbarLinks from './NavbarItems'
import styled from '@emotion/styled'

const NavbarComponent = styled.nav`
    background:var(--color-black);
    padding:.5rem 1rem;

    div.container{
        max-width:1920px;
        margin:auto;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }

    .brand-logo img{
        height:2rem;
    }

    ul{
        display:flex;

        li{
            list-style:none;

            a{
                color:var(--color-white);
                text-decoration:none;
                padding:0 10px;
                margin:0 5px;
            }
        }
    }

    @media(min-width: 769px){
        padding:.5rem 3rem;
    }
`

const linkss = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'Products',
        url: '/products'
    },
    {
        name: 'Contact',
        url: '/contact'
    },
    {
        name: <i className="fas fa-shopping-bag"></i>,
        url: '/cart'
    }
]

const Navbar = () => {

    return (
        <NavbarComponent>
            <div className="container">
                <div className="brand-logo">
                    <img src="logo.svg" alt="logo"/>
                </div>

                <NavbarLinks linkss={linkss} />
            </div>
        </NavbarComponent>
    )
}

export default Navbar