import React from 'react'
import '../styles/cvSkills.css'

const Skills = () => {
    const allskills= [
        { name: "JavaScript", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "React", level: "Expert" },
        { name: "Node.js", level: "Advanced" },
        { name: "HTML/CSS", level: "Expert" },
      ];




  return (
    <div>

        <div className="skiltitle">
            <h1>Skills</h1>
            <h3>A detailed overview of my professional capabilities and expertise across various domains.</h3>
        </div>
   
        <div className="skillcard">
  <h2>Technical Skills</h2>
  <p className="subtitle">technical soft, framework skills</p>

  <div className="skills-grid">
    {allskills.map((skill, index) => (
      <div key={index} className="skill-box">
        {skill.name}
      </div>
    ))}
    <input type="text" placeholder='Add skills' value="" />
  </div>
</div>
       
        
    </div>
  )
}

export default Skills
