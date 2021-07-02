import React from 'react'
import styled from 'styled-components/macro'

const AboutSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10%;
    color: #1a1a1a;
    h1 {
        font-size: 30px;
    }
    h2 {
        font-size: 26px;
    }
    a {
        font-weight: bold;
    }
    @media (min-width: 768px) {
        padding: 10% 20%;
    }
`

export const About = () => {

    return (
        <AboutSection>
        <h1>About the project</h1>
        <p>
            This website was built in spring 2021 as our final project at the Technigo coding bootcamp.
            I built a little website where I combine the interest for shoes and coding in to one.
            Take a look around and browse the website and if you are more interested, feel free to create your own account.
            </p>
        <h2>Who am I?</h2>
        <p>
            The programmers behind this project are
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ulysses-veghelyi-9b74b8203/"> Ulysses Veghelyi</a>,
            We hope you have fun checking out our website. 
        </p>
        </AboutSection>
    )
}