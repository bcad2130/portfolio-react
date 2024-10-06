import React from 'react'
import {ProjectsSection} from './styles'

const Projects = () => (
    <ProjectsSection>
      <div>
        <a href="https://brett-book-club.netlify.app/">
          <figure>
            <img src="./photos/book-club.png" />

            <figcaption>Book Club<br/>(API with Search)</figcaption>
          </figure>
        </a>
      </div>

      <div>
        <a href="https://brett-moody-blues.netlify.app/">
          <figure>
            <img src="./photos/moody.png" />

            <figcaption>Moody Blues<br/>(Faux Sign Up Page)</figcaption>
          </figure>
        </a>
      </div>

      <div>
        <a href="https://brett-photo-slideshow.netlify.app/">
          <figure>
            <img src="./photos/slideshow.png" />

            <figcaption>Slideshow</figcaption>
          </figure>
        </a>
      </div>

      <div>
        <a href="https://brett-moody-blues-purchase-tix.netlify.app/">
          <figure>
            <img src="./photos/purchase-tix.png" />

            <figcaption>Moody Blues Variant<br/>(Faux Ticket Purchase)</figcaption>
          </figure>
        </a>
      </div>
    </ProjectsSection>
)

export default Projects