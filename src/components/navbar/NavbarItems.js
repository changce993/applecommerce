import React from 'react'

const NavbarItems = ({linkss}) => {
    return (
        <div className="navbar-items">
            <ul>
                {linkss.map( link => {
                    return <li key={link.url}> <a  href={link.url}> {link.name} </a> </li>
                })}
            </ul>
        </div>
    )
}

export default NavbarItems
