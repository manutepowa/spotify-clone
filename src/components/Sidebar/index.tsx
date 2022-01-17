import styled from "styled-components"
import { Logo } from "./Logo"
import { MainMenu } from "./MainMenu"

export const Sidebar = () => {
  return (
    <Wrapper>
      <Logo />
      <MainMenu />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  background-color: #000000;
  min-width: 250px;
  width: 250px;
`
