import React from 'react'
import {Panel, BG, P, Em} from './styles' //CloseWrapper,
// import {Close, Button} from '../../styles'
// import Book from '../Book'

const DetailPanel = ({project, closePanel, state}) => {

  let detail = {}

  switch (project) {
    case 'bookclub':
      detail.description = "Web App for a book directory database. Includes Search tool with character matching on title and author, Favorites with persistent browser storage, and responsive animated detail panel."
      detail.stack = "Javascript, React.js, Styled Components, React Transition Group"
      break;
    case 'moody':
      detail.description = "Web App for a social media brand page. Includes Sign Up pop-up with input validation, Custom Colors adjustable via user selection, and animated jigsaw puzzle background based on pointer position."
      detail.stack = "Javascript, React.js, Styled Components, Formik, Yup"
    case 'slideshow':
      detail.description = "Web App for a photo slideshow. Includes navigation, slide counter, and responsive sizing for desktop and mobile."
      detail.stack = "Javascript, React.js"
    case 'purchasetix':
      detail.description = "Web App for a social media brand page (Alternate Variant). Includes shopping order form with price calculation, Custom Colors adjustable via user selection, and animated jigsaw puzzle background based on pointer position."
      detail.stack = "Javascript, React.js, Styled Components, Formik, Yup"
      break;
    default:
      console.log("Error: [DetailPanel] Project is not set");
  }

  // console.log('detail: ')
  // console.log(detail)
  // console.log(project)

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

  // console.log(detail)

  return (
    <>
      <P><b>Description:</b> {detail.description}</P>
      <P>
        <Em><b>Tech Stack:</b> {detail.stack}</Em>
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