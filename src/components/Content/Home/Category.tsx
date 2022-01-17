import styled from "styled-components"
import { CategoryItem } from "."

interface Props {
  category: CategoryItem;
}
export const Category = ({ category }: Props) => {
  return (
    <Wrapper>
      <Title>{category.name}</Title>
      <img src={category.icons[0].url} key={category.id} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`
const Title = styled.h1`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.5rem;
`
