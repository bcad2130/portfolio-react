import React from 'react'
import {ProjectsSection, Project, ProjectImg, ProjectFig, ProjectFigCaption} from './styles'
import bookclub from "../../assets/book-club.png";
import moody from "../../assets/moody.png";
import slideshow from "../../assets/slideshow.png";
import purchasetix from "../../assets/purchase-tix.png";

const Projects = () => (
    <ProjectsSection>
      <Project>
        <a href="https://brett-book-club.netlify.app/">
          <ProjectFig>
            <ProjectImg src={bookclub} />

            <ProjectFigCaption>Book Club<br/>(API with Search)</ProjectFigCaption>
          </ProjectFig>
        </a>
      </Project>

      <Project>
        <a href="https://brett-moody-blues.netlify.app/">
          <ProjectFig>
            <ProjectImg src={moody} />

            <ProjectFigCaption>Moody Blues<br/>(Faux Sign Up Page)</ProjectFigCaption>
          </ProjectFig>
        </a>
      </Project>

      <Project>
        <a href="https://brett-photo-slideshow.netlify.app/">
          <ProjectFig>
            <ProjectImg src={slideshow} />

            <ProjectFigCaption>Slideshow</ProjectFigCaption>
          </ProjectFig>
        </a>
      </Project>

      <Project>
        <a href="https://brett-moody-blues-purchase-tix.netlify.app/">
          <ProjectFig>
            <ProjectImg src={purchasetix} />

            <ProjectFigCaption>Moody Blues Variant<br/>(Faux Ticket Purchase)</ProjectFigCaption>
          </ProjectFig>
        </a>
      </Project>
    </ProjectsSection>
)

export default Projects
