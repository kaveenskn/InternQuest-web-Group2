import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileDisplay from '../component/ProfileComponents/profiledisplay';
import ProfileEditForm from '../component/ProfileComponents/profileEditForm';
import '../pagestyles/ProfilePage.css';

const emptyProfile = {
  fullname: '',
  email: '',
  universityName: '',
  universityLocation: '',
  course_of_study: '',
  phone: '',
  github_link: '',
  skills: [],
  projects: [],
};

const ProfilePage = () => {
  const [profile, setProfile] = useState(emptyProfile);
  const [projects, setProjects] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [newProject, setNewProject] = useState({ title: '', description: '', tech_stack: '', link: '' });
  const [message, setMessage] = useState('');
  const [showProfile, setShowProfile] = useState(false); 
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/students/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = res.data;
        
        if (data) {
          const formattedProfile = {
            fullname: data.fullname || '',
            email: data.user?.email || data.email || '',
            universityName: data.universityName || '',
            universityLocation: data.universityLocation || '',
            course_of_study: data.course_of_study || '',
            phone: data.phone || '',
            github_link: data.github_link || '',
            skills: data.skills || [],
            projects: data.projects || [],
          };
          setProfile(formattedProfile);
          setProjects(formattedProfile.projects);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        setProfile(emptyProfile);
        setProjects([]);
      }
    };

    fetchProfile();
  }, []);

  const handleSaveProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.put(
        'http://localhost:5000/api/students/profile',
        {
          ...profile,
          projects,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const updated = res.data;
      setProfile(prev => ({
        ...prev,
        ...updated,
        skills: updated.skills || prev.skills,
        projects: updated.projects || prev.projects,
      }));
      setProjects(updated.projects || []);
      alert('Profile saved successfully!');
      setIsEditing(false); // exit edit mode after save
    } catch (err) {
      alert('Error saving profile: ' + err.message);
    }
  };

  return (
    <div className="profilehome-container">
      {!showProfile ? (
        <>
          {/* Landing / Hero Section */}
          <div className="stdprofile-hero-alt">
            <div className="stdprofile-bg-decoration">
              <div className="stdprofile-circle stdprofile-top-right"></div>
              <div className="stdprofile-circle stdprofile-bottom-left"></div>
            </div>

            <div className="stdprofile-container">
              <div className="stdprofile-content">
                <div className="stdprofile-background">
                <h1 className="stdprofile-heading">
                  <div style={{ fontWeight: 500 }}>Build</div>Your Future
                </h1>

                <p className="stdprofile-description">
                  Create and showcase your professional profile, track your internship journey,
                  and connect with opportunities that shape your career path.
                </p>
                 
                <div className="stdprofile-buttons">
                  <button onClick={() => setShowProfile(true)} className="stdprofile-btn-orange">
                    View My Profile
                  </button>
                  <button className="stdprofile-btn-outline-blue">Explore Community</button>
                </div>
               </div><br /><br />
                <div className="stdprofile-trust-scroll-container">
                  <div className="stdprofile-trust-marquee">
                    <div className="stdprofile-trust-grid">
                      <div className="stdprofile-trust-item">
                        <div className="stdprofile-trust-number">50K+</div>
                        <div className="stdprofile-trust-label">Active Users</div>
                      </div>
                      <div className="stdprofile-trust-item">
                        <div className="stdprofile-trust-number">10K+</div>
                        <div className="stdprofile-trust-label">Internships</div>
                      </div>
                      <div className="stdprofile-trust-item">
                        <div className="stdprofile-trust-number">500+</div>
                        <div className="stdprofile-trust-label">Companies</div>
                      </div>
                      <div className="stdprofile-trust-item">
                        <div className="stdprofile-trust-number">95%</div>
                        <div className="stdprofile-trust-label">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Section */}
          <section className="profilehome-features">
            <h2 className="profilehome-heading">Your Journey Starts Here</h2>
            <p className="profilehome-subheading">
              Discover the powerful features that help you showcase your potential and advance your career
            </p>
            <div className="profilehome-feature-grid">
              <div className="profilehome-feature-card">
                <img
                  src="https://images.nightcafe.studio/jobs/bDNLKyDBEhfJ62U07MH9/bDNLKyDBEhfJ62U07MH9--0--kostn.jpg?tr=w-1600,c-at_max"
                  alt="Profile Icon"
                  className="feature-image"
                />
                <hr style={{ border: 'none', height: '2px', backgroundColor: ' rgba(251, 132, 14, 1)' }} />
                <h3>Professional Profile</h3>
                <p>
                  Create a comprehensive profile that highlights your skills, experiences, and achievements to potential
                  employers.
                </p>
              </div>
              <div className="profilehome-feature-card">
                <img
                  src="https://images.nightcafe.studio/jobs/kHjTHlAusucnPBwNATJA/kHjTHlAusucnPBwNATJA--0--ibavs.jpg?tr=w-1600,c-at_max"
                  alt="Achievements Icon"
                  className="feature-image"
                />
                <hr style={{ border: 'none', height: '2px', backgroundColor: 'rgba(0, 10, 87, 0.95)' }} />
                <h3>Track Achievements</h3>
                <p>Document your projects, certifications, and milestones as you progress through your internship journey.</p>
              </div>
              <div className="profilehome-feature-card">
                <img
                  src="https://images.nightcafe.studio/jobs/CUW100i3oMmUf3Uc9ta3/CUW100i3oMmUf3Uc9ta3--0--slbk0.jpg?tr=w-1600,c-at_max"
                  alt="Skills Icon"
                  className="feature-image"
                />
                <hr style={{ border: 'none', height: '2px', backgroundColor: 'rgba(252, 137, 22, 1)' }} />
                <h3>Showcase Skills</h3>
                <p>Display your technical and soft skills in an organized, visually appealing format that stands out.</p>
              </div>
            </div>
            <button className="profilehome-cta" onClick={() => setShowProfile(true)}>
              Get Started Now
            </button>
          </section>
        </>
      ) : (
        <>
          {/* Profile View Section */}
          {isEditing ? (
            <ProfileEditForm
              profile={profile}
              setProfile={setProfile}
              newSkill={newSkill}
              setNewSkill={setNewSkill}
              newProject={newProject}
              setNewProject={setNewProject}
              projects={projects}
              setProjects={setProjects}
              handleSaveProfile={handleSaveProfile}
              message={message}
              onCancel={() => setIsEditing(false)} // cancel edit mode
            />
          ) : (
            <ProfileDisplay
              profile={profile}
              projects={projects}
              onEdit={() => setIsEditing(true)} // enter edit mode
            />
          )}
        </>
      )}
    </div>
  );
};

export default ProfilePage;
