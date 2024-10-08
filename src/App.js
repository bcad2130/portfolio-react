// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Navigation from './components/navigation'
import About from './components/about_me'
import Projects from './components/projects'
import DetailPanel from './components/detail_panel'
import {Transition} from 'react-transition-group'

function App() {
  const [showPanel, setShowPanel] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const pickProject = (projectId) => {
    // console.log(projectId)
    setSelectedProject(projectId)
    console.log(selectedProject)

    setShowPanel(true)
    console.log(showPanel)
  }

  const closePanel = () => {
    setSelectedProject(null)
    setShowPanel(false)
  }

  return (
    <>
      <Navigation/>
      <Projects pickProject={pickProject} />
      <Transition in={showPanel} timeout={300} >
          {(state) => (
            <DetailPanel project={selectedProject} closePanel={closePanel} state={state} />
          )}
      </Transition>
    </>
  );
}


      // <Transition in={showPanel} timeout={300} >
      //     {(state) => (
      //       <DetailPanel book={selectedBook} closePanel={closePanel} state={state} toggleFave={toggleFave}/>
      //     )}
      // </Transition>


export default App;
