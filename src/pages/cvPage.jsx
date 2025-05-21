import React from 'react'
import '../pagestyles/cvPage.css'
import Projects from '../component/cvProjects';
import Skills from '../component/cvSkills';
import Contact from '../component/cvContact';

const StudentProfile = () => {
  return (
    <div className='studentprofile'>
      <div className="covercv">
        <div className="image"></div>
        <div className="covertext">
          <h2>Name</h2>
          <h3>Course Of study</h3>
          <div className="university">
               <div>University</div>
               <div>location</div>
          </div>
          <div className="buttons">
            <button>Contact Me</button>
            <button>Download CV</button>
          </div>
        </div>
      </div>
     <Contact/>
       <Skills/>
       <Projects/>
    </div>
  )
}

export default StudentProfile
