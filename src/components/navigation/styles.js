import styled from 'styled-components'

export const NavHeader = styled.header`
  padding: 1rem 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: LightSalmon;
  height: 50px;
`

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  font-variation-settings: 'wght' 700;
  color: #fff;
  text-shadow: 2px 2px 1px pink;
`

export const NavBar = styled.nav`
  display: flex;
  gap: 1rem;
`

export const NavLink = styled.button`
  background-color: #73aa77;
  border: 1px solid #73aa77;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: ${({$pageContent, $pageName}) => ($pageContent === $pageName ? '1000' : '500')};
  padding: 10px 25px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover,
  &:focus {
    color: green;
  }
  &:active {
    color: darkgreen;
  }

  @media (min-width: 900px) {
    padding: 10px 30px;
  }
`

//   // color: ${({$pageContent, $pageName}) => ($pageContent === $pageName ? '#000' : '#fff')};
// .button-37:hover {
//   box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
//   transform: translateY(-2px);
// }

// @media (min-width: 768px) {
//   .button-37 {
//     padding: 10px 30px;
//   }
// }