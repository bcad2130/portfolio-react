import React from 'react'
import {Panel, PanelImage, PanelTitle, BG, P, Em} from './styles'
import bookclub from "../../assets/book-club.png";
import moody from "../../assets/moody.png";
import slideshow from "../../assets/slideshow.png";
import purchasetix from "../../assets/purchase-tix.png";

const DetailPanel = ({project, closePanel, state}) => {

  const detail = {
    image: null,
    title: "",
    description: "",
    stack: "",
    weblink: "",
    gitlink: "",
  }

  switch (project) {
    case 'bookclub':
      detail.image = bookclub
      detail.title = "Book Club"
      detail.description = "Web App for a book directory database. Includes Search tool with character matching on title and author, Favorites with persistent browser storage, and responsive animated detail panel."
      detail.stack = "Javascript, React.js, Styled Components, React Transition Group"
      detail.weblink = "https://brett-book-club.netlify.app/"
      detail.gitlink = "https://github.com/bcad2130/book-club/"
      break;

    case 'moody':
      detail.image = moody
      detail.title = "Moody Blues"
      detail.description = "Web App for a social media brand page. Includes Sign Up pop-up with input validation, Custom Colors adjustable via user selection, and animated jigsaw puzzle background based on pointer position."
      detail.stack = "Javascript, React.js, Styled Components, Formik, Yup"
      detail.weblink = "https://brett-moody-blues.netlify.app/"
      detail.gitlink = "https://github.com/bcad2130/moody-blues/"
      break;

    case 'slideshow':
      detail.image = slideshow
      detail.title = "Slide Show"
      detail.description = "Web App for a photo slideshow. Includes navigation, slide counter, and responsive sizing for desktop and mobile."
      detail.stack = "Javascript, React.js"
      detail.weblink = "https://brett-photo-slideshow.netlify.app/"
      detail.gitlink = "https://github.com/bcad2130/photo-slideshow/"
      break;

    case 'purchasetix':
      detail.image = purchasetix
      detail.title = "Moody Blues (w/ Tickets)"
      detail.description = "Web App for a social media brand page (Alternate Variant). Includes shopping order form with price calculation, Custom Colors adjustable via user selection, and animated jigsaw puzzle background based on pointer position."
      detail.stack = "Javascript, React.js, Styled Components, Formik, Yup"
      detail.weblink = "https://brett-moody-blues-purchase-tix.netlify.app/"
      detail.gitlink = "https://github.com/bcad2130/moody-blues/tree/purchase-tix/"
      break;

    default:
      detail.image = null
      detail.description = ""
      detail.stack = ""
      detail.weblink = ""
      detail.gitlink = ""
  }

  return (
    <>
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state}>
        {project && (
          <>
            <BookClubDetail detail={detail} />
          </>
        )}
      </Panel>
    </>
  )
}

const BookClubDetail = ({detail}) => {

  return (
    <>
      <PanelImage src={detail.image} />
      <PanelTitle>{detail.title}</PanelTitle>
      <P>
        <b>Description:</b> {detail.description}
      </P>
      <P>
        <Em><b>Tech Stack:</b> {detail.stack}</Em>
      </P>
      {/*<h4>Links</h4>*/}
      <P>
        <a href={detail.weblink}>Web Page</a>
      </P>
      <P>
        <a href={detail.gitlink}>Git Repo</a>
      </P>
    </>
  )
}
    // <>
      // <BG onClick={closePanel} $state={state} />
      // <Panel $state={state}>
      //   <CloseWrapper onClick={closePanel} $state={state}>
      //     <Close />
      //   </CloseWrapper>

      //   {book && (
      //     <>
      //       <Button onClick={() => toggleFave(book.id)} $hasEmoji={true} >
      //         {book.isFaved ? '💔 Unfave book' : '❤️ Fave book'}
      //       </Button>
      //       <Book book={book} isLarge={true}/>
      //       <P>{book.description}</P>
      //       <P>
      //         <Em>Published in {book.published}</Em>
      //       </P>
      //     </>
      //   )}
      // </Panel>
    // </>

export default DetailPanel