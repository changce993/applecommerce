import React from 'react'
import styled from '@emotion/styled'

const SubTxt = styled.p`
    font-size:1rem;
    margin:1rem 0;
    text-align:center;
`

const SubTxtheader = ({SubTxts}) => {
    return (
        <SubTxt>{SubTxts}</SubTxt>
    )
}

export default SubTxtheader
