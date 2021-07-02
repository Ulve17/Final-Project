import React from 'react'
import styled from 'styled-components/macro'
import { FeatureGrid } from 'components/FeaturedGrid'
import { Button } from 'lib/Button'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
    a {
        text-decoration: none;
    }
`
const HeroImage = styled.div`
    position: relative;
    height: 80vh;
    background-image: url('https://quickbutik.imgix.net/10941l/templates/fiore/assets/ik6qn5kcqksoinb.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
const HeroTextContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #ffffff4d;
    transform: translate(-50%, -50%);
`
const HeroTitle = styled.h2`
    margin: 10px 0;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    @media (min-width: 768px) {
        font-size: 51px;
    }
`
const SubTitle = styled.p`
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`


export const LandingPage = () => {
    const history = useHistory()

    const toAllProducts = () => {
        history.push('/products')
    }

    const toMarket = () => {
        history.push('/market')
    }

    return (
        <Container>
            <HeroImage>
                <HeroTextContainer>
                    <HeroTitle>LATEST DROPS</HeroTitle>
                    <SubTitle>What are you looking for? Nike Air Jordan, Dunk, Moncler, Louis Vuitton? 
                        We have something for everyone.
                    </SubTitle>
                        <Button onClick={toAllProducts} title="All products" background="transparent" />
                </HeroTextContainer>
            </HeroImage>
        <FeatureGrid />
        </Container>
    )
}