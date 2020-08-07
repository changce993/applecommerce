import React from 'react'
import styled from '@emotion/styled'

const TituloUno = styled.h1`
    margin-bottom:1rem;
    text-align:center;
    
    @media(min-width: 769px)    {
        width:45%;
    }
`

const TxtHeader = ({Txts}) => {
    return (
        <TituloUno>{Txts}</TituloUno>
    )
}

export default TxtHeader
