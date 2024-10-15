import React from 'react'
import {NavHeader, PageTitle, NavBar, NavLink, Pill} from './styles'

const Navigation = ({pageContent, setPageContent}) => (
  <NavHeader>
    <PageTitle>Coding Projects</PageTitle>
    <NavBar>
      <NavLink $pageContent={pageContent} $pageName="projects" onClick={() => setPageContent('projects')} >Projects</NavLink>
      <NavLink $pageContent={pageContent} $pageName="resume" onClick={() => setPageContent('resume')} >Resume</NavLink>
      <NavLink $pageContent={pageContent} $pageName="about" onClick={() => setPageContent('about')} >About Me</NavLink>
    </NavBar>
  </NavHeader>
)

export default Navigation


// https://docs.google.com/document/d/1kR4dyKhPd3i3F8GFFOWf9n7niDfeiWw1EybwNuGNwJo/export?format=pdf