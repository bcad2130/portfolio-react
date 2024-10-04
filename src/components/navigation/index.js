import React from 'react'
import {NavHeader, PageTitle, NavBar, NavLink} from './styles'

const Navigation = () => (
    <NavHeader>
      <PageTitle>Coding Projects</PageTitle>
      <NavBar>
        <NavLink href="./index.html" class="active">Projects</NavLink>
        <NavLink href="https://docs.google.com/document/d/1kR4dyKhPd3i3F8GFFOWf9n7niDfeiWw1EybwNuGNwJo/export?format=pdf">Resume</NavLink>
        <NavLink href="./about_me.html">About Me</NavLink>
      </NavBar>
    </NavHeader>
)

export default Navigation