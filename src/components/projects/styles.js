import styled from 'styled-components'

export const ProjectsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;

  /*cursor: e-resize;*/
  // padding: 1rem 0.5rem;
  // transition: grid-template-columns 0.4s;
  // gap: 0;
`

export const Project = styled.div`
  overflow: hidden;
  // opacity: 1;
  // transition: opacity 0.4s;
`

export const ProjectImg = styled.img`
  max-width: 100%;
  // aspect-ratio: 4 / 5;
  // object-fit: cover;
`

export const ProjectFig = styled.figure`
  width: 100%;
  // padding: 0 0.5rem;
`

export const ProjectFigCaption = styled.figcaption`
  max-width: 10rem;
  // margin: 0.25rem 0 0 0;
`