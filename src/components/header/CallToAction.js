import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
    padding:.5rem 1rem;
    outline:none;
    border:none;
    color:var(--color-white);
    background-color: var(--color-four);
    margin:1rem;
    cursor:pointer;
    transition:.2s;

    &:hover{
        box-shadow:0 0 5px var(--color-four);
        border-radius:.1rem;
    }
`

const CallToAction = ({CTA}) => {
    return (
        <Button>
            {CTA}
        </Button>
    )
}

export default CallToAction
