import React from 'react'
import InfoPart from './Components/info.js'
import ContactMe from './Components/Contact.js'
import Projects from './Components/Projects.js'
import TechStacks from './Components/TechStacks.js'

const HomePage = () => {
  return (
    <div>
        <InfoPart></InfoPart>
        <TechStacks></TechStacks>
        <Projects></Projects>
        <ContactMe></ContactMe>
      
    </div>
  )
}

export default HomePage
