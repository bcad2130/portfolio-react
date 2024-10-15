import React from 'react'
import {ProjectsSection, Project, ProjectImg, ProjectFig, ProjectFigCaption} from './styles'
import bookclub from "../../assets/book-club.png";
import moody from "../../assets/moody.png";
import slideshow from "../../assets/slideshow.png";
import purchasetix from "../../assets/purchase-tix.png";

const Projects = ({pickProject}) => (
    <ProjectsSection>
      <Project onClick={() => pickProject('bookclub')}>
          <ProjectFig>
            <ProjectImg src={bookclub} />

            <ProjectFigCaption>Book Club<br/>(API with Search)</ProjectFigCaption>
          </ProjectFig>
      </Project>

      <Project onClick={() => pickProject('moody')}>
          <ProjectFig>
            <ProjectImg src={moody} />

            <ProjectFigCaption>Moody Blues<br/>(Faux Sign Up Page)</ProjectFigCaption>
          </ProjectFig>
      </Project>

      <Project onClick={() => pickProject('slideshow')}>
          <ProjectFig>
            <ProjectImg src={slideshow} />

            <ProjectFigCaption>Slideshow</ProjectFigCaption>
          </ProjectFig>
      </Project>

      <Project onClick={() => pickProject('purchasetix')}>
          <ProjectFig>
            <ProjectImg src={purchasetix} />

            <ProjectFigCaption>Moody Blues Variant<br/>(Faux Ticket Purchase)</ProjectFigCaption>
          </ProjectFig>
      </Project>
    </ProjectsSection>
)

export default Projects
