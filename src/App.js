import './App.css';
import React, {useState} from 'react'
import Navigation from './components/navigation'
import About from './components/about_me'
import Projects from './components/projects'
import DetailPanel from './components/detail_panel'
import Resume from './components/resume'
import {Transition} from 'react-transition-group'

function App() {
  const [content, setContent] = useState('about')
  const [showPanel, setShowPanel] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const pickProject = (projectId) => {
    setSelectedProject(projectId)
    setShowPanel(true)
  }

  const closePanel = () => {
    setSelectedProject(null)
    setShowPanel(false)
  }

  const setPageContent = (pageContent) => {
    console.log(pageContent)
    setContent(pageContent)

  }

  return (
    <>
      <Navigation pageContent={content} setPageContent={setPageContent} />
      {content == 'about' && <About/>}

      {content == 'projects' &&
        <>
          <Projects pickProject={pickProject} />
          <Transition in={showPanel} timeout={300} >
              {(state) => (
                <DetailPanel project={selectedProject} closePanel={closePanel} state={state} />
              )}
          </Transition>
        </>
      }


      {content == 'resume' && <Resume/>}
    </>
  );
}

export default App;
