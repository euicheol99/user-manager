import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed; 
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f3f2f2;

`

const SecondContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
    flex-wrap: wrap;
    justify-content: ${(props) => props.justify || 'center'};
    align-items: center;
    width: 90%;
    height: 100%;
    background: #ffffff;
`

const Layout = ({children,direction,justify}) => {
  return (
    <Container>
        <SecondContainer direction={direction} justify={justify}>
            {children}
        </SecondContainer>
    </Container>
  )
}

export default Layout