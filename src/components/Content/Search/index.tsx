import styled from "styled-components"
import { ExploreAll } from "./ExploreAll"
import { SearchInput } from "./SearchInput"

export const Search = () => {
  return (
    <Wrapper>
      <SearchInput />
      <ExploreAll />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  font-family: "Inter", sans-serif;
`
