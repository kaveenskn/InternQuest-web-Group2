import { useState } from "react";
import "./App.css";

function App() {
  const [view, setView] = useState("editor");

  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    contact: "",
    location: "",
    summary: "",
  });

  const [educationList, setEducationList] = useState([
    { degree: "", institution: "", year: "" },
  ]);

  const [experienceList, setExperienceList] = useState([
    { title: "", company: "", duration: "" },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...educationList];
    updated[index][name] = value;
    setEducationList(updated);
  };

  const addEducation = () => {
    setEducationList([...educationList, { degree: "", institution: "", year: "" }]);
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...experienceList];
    updated[index][name] = value;
    setExperienceList(updated);
  };

  const addExperience = () => {
    setExperienceList([...experienceList, { title: "", company: "", duration: "" }]);
  };

  return (
    <div className="app-container">
      <div className="content-box">
        <h1 style={{ textAlign: "center" }}>Build Your CV</h1>
        <p style={{ textAlign: "center", marginBottom: "20px" }}>
          Create and manage your professional resume.
        </p>

        <div className="nav-buttons">
          <button onClick={() => setView("editor")}>Editor</button>
          <button onClick={() => setView("template")}>Template</button>
          <button onClick={() => setView("preview")}>Preview</button>
        </div>

        <hr style={{ margin: "20px 0" }} />

        {view === "editor" && (
          <div className="form-section">
            <h2>Personal Information</h2>
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={personalInfo.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={personalInfo.email}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Contact Number"
              name="contact"
              value={personalInfo.contact}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={personalInfo.location}
              onChange={handleChange}
            />
            <textarea
              placeholder="Professional Summary"
              name="summary"
              value={personalInfo.summary}
              onChange={handleChange}
              rows={3}
            />

            <h2>Education</h2>
            {educationList.map((edu, index) => (
              <div key={index} className="edu-block">
                <input
                  type="text"
                  name="degree"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(index, e)}
                />
                <input
                  type="text"
                  name="institution"
                  placeholder="Institution"
                  value={edu.institution}
                  onChange={(e) => handleEducationChange(index, e)}
                />
                <input
                  type="text"
                  name="year"
                  placeholder="Year"
                  value={edu.year}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </div>
            ))}
            <button type="button" onClick={addEducation}>
              + Add Education
            </button>

            <h2>Work Experience</h2>
            {experienceList.map((exp, index) => (
              <div key={index} className="exp-block">
                <input
                  type="text"
                  name="title"
                  placeholder="Job Title"
                  value={exp.title}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
                <input
                  type="text"
                  name="duration"
                  placeholder="Duration"
                  value={exp.duration}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>
            ))}
            <button type="button" onClick={addExperience}>
              + Add Experience
            </button>
          </div>
        )}

        {view === "template" && (
          <div className="form-section">
            <h2>Choose a Resume Template</h2>
            <div className="template-list">
              <div className="template-box">
                <h3>Template A</h3>
                <p>Modern layout with bold headings and clean sections.</p>
              </div>
              <div className="template-box">
                <h3>Template B</h3>
                <p>Classic style with elegant fonts and structured layout.</p>
              </div>
            </div>
          </div>
        )}

        {view === "preview" && (
          <div className="form-section">
            <h2>Resume Preview</h2>
            <h3>{personalInfo.fullName}</h3>
            <p><strong>Email:</strong> {personalInfo.email}</p>
            <p><strong>Contact:</strong> {personalInfo.contact}</p>
            <p><strong>Location:</strong> {personalInfo.location}</p>
            <p><strong>Summary:</strong> {personalInfo.summary}</p>

            <h3>Education</h3>
            <ul>
              {educationList.map((edu, idx) => (
                <li key={idx}>
                  <strong>{edu.degree}</strong> – {edu.institution} ({edu.year})
                </li>
              ))}
            </ul>

            <h3>Work Experience</h3>
            <ul>
              {experienceList.map((exp, idx) => (
                <li key={idx}>
                  <strong>{exp.title}</strong> at {exp.company} ({exp.duration})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
