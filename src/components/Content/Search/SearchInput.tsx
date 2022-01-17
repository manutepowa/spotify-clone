import styled from "styled-components"
import { useSearchContext } from "./context/SearchContext"
import { BiSearch } from "react-icons/bi"
import { IoMdClose } from "react-icons/io"

export const SearchInput = () => {
  const { term, setSearchTerm } = useSearchContext()
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Search"
        value={term}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <Overlay>
        <SvgWrapper>
          <BiSearch size={24} />
        </SvgWrapper>
        {term && (
          <ClearButton onClick={() => setSearchTerm("")}>
            <IoMdClose size={24} />
          </ClearButton>
        )}
      </Overlay>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  max-width: 350px;
  flex-direction: row;
  position: relative;
`
const ClearButton = styled.button`
  color: #121212;
  cursor: default;
  pointer-events: auto;
`
const Input = styled.input`
  border: 0;
  border-radius: 500px;
  color: #000;
  height: 40px;
  padding: 6px 48px;
  text-overflow: ellipsis;
  width: 100%;
  font-size: 14px;
  outline: none;
`
const Overlay = styled.div`
  display: flex;
  align-items: center;
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 12px;
  right: 12px;
`
const SvgWrapper = styled.span`
  color: #121212;
  flex: 1;
`
