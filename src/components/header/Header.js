import React, {Fragment} from 'react'
import TxtHeader from './TxtHeader'
import SubTxtHeader from './SubTxtheader'
import CallToAction from './CallToAction'
import styled from '@emotion/styled'

const HeaderComponent = styled.header`
    height:60vh;
    background:var(--color-black);
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media(min-width: 769px){

    }
`

const Txts = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
const SubTxts = 'sed do eiusmod tempor incididunt ut.'
const CTA = 'Ver productos'

const Header = () => {
    return (
        <HeaderComponent>
            <TxtHeader Txts={Txts}/>
            <SubTxtHeader SubTxts={SubTxts}/>
            <CallToAction CTA={CTA}/>
        </HeaderComponent>
    )
}

export default Header