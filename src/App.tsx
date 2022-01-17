import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import styled from "styled-components/macro"
import { Router } from "./components/Router"
import { Sidebar } from "./components/Sidebar"
import { isLoggedIn } from "./utils/isLoggedIn"
import login from "./utils/login"

function App() {
  useEffect(() => {
    const isLogged = isLoggedIn()
    if (!isLogged) {
      login()
    }
  }, [])
  return (
    <BrowserRouter>
      <Wrapper>
        <ContentWrapper>
          <Sidebar />
          <Content>
            <Router />
          </Content>
        </ContentWrapper>

        <PlayBar>sdfsf</PlayBar>
      </Wrapper>
    </BrowserRouter>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 90px);
`
const Content = styled.div`
  background-color: #181818;
  width: 100%;
  padding: 5px;
  overflow: hidden;
  overflow-y: auto;
`
const PlayBar = styled.div`
  height: 90px;
  background-color: #181818;
`
export default App
