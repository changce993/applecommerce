import React from 'react'
import styled from '@emotion/styled'

const NavbarComponent = styled.nav`
    background: var(--color-two);
    padding:1rem;

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
`

const linkss = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'About',
        url: '/about'
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
                    <img src="logo.png" alt="logo"/>
                </div>

                <div className="navbar-items">
                    <ul>
                        {linkss.map( link => {
                            return <li key={link.url}> <a  href={link.url}> {link.name} </a> </li>
                        })}
                    </ul>
                </div>
            </div>
        </NavbarComponent>
    )
}

export default Navbar