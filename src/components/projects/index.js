import React from 'react'
import {ProjectsSection, Project, ProjectImg, ProjectFig, ProjectFigCaption} from './styles'

const Projects = () => (
    <ProjectsSection>
      <Project>
        <a href="https://brett-book-club.netlify.app/">
          <ProjectFig>
            <ProjectImg src="./photos/book-club.png" />

            <ProjectFigCaption>Book Club<br/>(API with Search)</ProjectFigCaption>
          </ProjectFig>
        </a>
      </Project>

      <Project>
        <a href="https://brett-moody-blues.netlify.app/">
          <ProjectFig>
            <ProjectImg src="./photos/moody.png" />

            <ProjectFigCaption>Moody Blues<br/>(Faux Sign Up Page)</ProjectFigCaption>
          </ProjectFig>
        </a>
      </Project>

      <Project>
        <a href="https://brett-photo-slideshow.netlify.app/">
          <ProjectFig>
            <ProjectImg src="./photos/slideshow.png" />

            <ProjectFigCaption>Slideshow</ProjectFigCaption>
          </ProjectFig>
        </a>
      </Project>

      <Project>
        <a href="https://brett-moody-blues-purchase-tix.netlify.app/">
          <ProjectFig>
            <ProjectImg src="./photos/purchase-tix.png" />

            <ProjectFigCaption>Moody Blues Variant<br/>(Faux Ticket Purchase)</ProjectFigCaption>
          </ProjectFig>
        </a>
      </Project>
    </ProjectsSection>
)

export default Projects