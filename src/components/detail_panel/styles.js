import styled from 'styled-components'

export const Panel = styled.article`
  background-color: #81dfff;
  border-top: 2px solid #000;

  width: 100vw;
  height: 500px;

  position: fixed;
  z-index: 2;
  bottom: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-500px')};

  box-sizing: border-box;
  padding: 40px;

  overflow: scroll;
  transition: 300ms;
`

export const P = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 30px 0 0;
`

export const Em = styled.em`
  font-style: italic;
`

export const BG = styled.div`
  background: rgba(0,0,0,0.5);
  cursor: pointer;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 1;
  opacity: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 1 : 0)};
  pointer-events: ${({$state}) => ($state === 'exited' ? 'none' : 'auto')};
  transition: 300ms;
`

export const PanelImage = styled.img`
  width: 350px;
  height: 350px;
  max-width: 100%;
  min-width: 250px;
  float: left;
  margin: 0 20px;
`

export const PanelTitle = styled.h1`
  text-align: center;
`

// export const CloseWrapper = styled(Pill)`
//   display: ${({$state}) => ($state === 'entered' ? 'flex' : 'none')};
//   top: 120px;
//   right: 40px;
//   position: fixed;
//   z-index: 4;

//   @media (max-width: 1000px) {
//     top: unset;
//     bottom: 20px;
//     right: 20px;
//   }
// `
