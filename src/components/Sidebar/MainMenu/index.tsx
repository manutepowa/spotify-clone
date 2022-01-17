import { FC } from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import Home from "../icons/Home"
import Library from "../icons/Library"
import Search from "../icons/Search"

interface MenuItem {
  name: string;
  path: string;
  icon: JSX.Element;
}
const menuItems: MenuItem[] = [
  {
    name: "Inicio",
    path: "/",
    icon: <Home />,
  },
  {
    name: "Buscar",
    path: "/search",
    icon: <Search />,
  },
  {
    name: "Tu biblioteca",
    path: "/library",
    icon: <Library />,
  },
]
export const MainMenu: FC = () => {
  const { pathname } = useLocation()
  return (
    <Wrapper>
      <MenuList>
        {menuItems.map((item: MenuItem) => (
          <MenuListItem active={pathname === item.path} key={item.name}>
            {item.icon}
            <Link to={item.path}>{item.name}</Link>
          </MenuListItem>
        ))}
      </MenuList>
    </Wrapper>
  )
}
const Wrapper = styled.div``

const MenuList = styled.ul``
const MenuListItem =
  styled.li <
  { active: boolean } >
  `
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 16px;
  cursor: pointer;
  padding: 8px 15px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  color: rgb(179, 179, 179);
  transition: background-color 50ms ease-in, color 50ms ease-in;

  ${({ active }) =>
    active && `background: rgb(40,40,40); opacity: 1; color: white;`}

  > svg {
    margin-right: 15px;
    transition: background-color 50ms ease-in, color 50ms ease-in;
  }
  &:hover {
    color: white;
  }
`
