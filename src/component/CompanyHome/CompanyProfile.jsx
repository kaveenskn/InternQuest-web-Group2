import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/CompanyProfile.css";

const CompanyProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");

  const token = localStorage.getItem("token");

  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/employee-profile/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(res.data);
      setFormData({
        fullname: res.data.fullname || "",
        companyName: res.data.companyName || "",
        companyLocation: res.data.companyLocation || "",
      });
    } catch (err) {
      console.error("Failed to fetch company profile:", err);
      setError("Could not load your company profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSaveMsg("");
    try {
      const res = await axios.put(
        "http://localhost:5000/api/employee-profile/me",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setProfile(res.data);
      setSaveMsg("Profile updated successfully!");
      setTimeout(() => {
        setShowEdit(false);
        setSaveMsg("");
      }, 1200);
    } catch (err) {
      setSaveMsg("Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="cp-loading">Loading profile...</div>;
  if (error) return <div className="cp-error">{error}</div>;
  if (!profile) return <div className="cp-error">No profile found.</div>;

  const initials = profile.fullname
    ? profile.fullname.split(" ").map((n) => n[0]).slice(0, 2).join("")
    : "CO";

  return (
    <div className="company-profile-wrapper">
      {/* Banner */}
      <div className="cp-header">
        <div className="cp-avatar">{initials}</div>
        <div className="cp-header-info">
          <h1>{profile.fullname}</h1>
          <span className="cp-role-tag">Employer Account</span>
        </div>
      </div>

      {/* Info Cards */}
      <div className="cp-grid">
        <div className="cp-card">
          <div className="cp-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
          </div>
          <div className="cp-card-label">Company Name</div>
          <div className="cp-card-value">{profile.companyName || "—"}</div>
        </div>

        <div className="cp-card">
          <div className="cp-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div className="cp-card-label">Company Location</div>
          <div className="cp-card-value">{profile.companyLocation || "—"}</div>
        </div>

        <div className="cp-card">
          <div className="cp-card-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div className="cp-card-label">Full Name</div>
          <div className="cp-card-value">{profile.fullname || "—"}</div>
        </div>
      </div>

      {/* Edit Button */}
      <button className="cp-edit-btn" onClick={() => setShowEdit(true)}>
        Edit Profile
      </button>

      {/* Edit Modal */}
      {showEdit && (
        <div className="cp-modal-overlay" onClick={() => setShowEdit(false)}>
          <div className="cp-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="cp-modal-title">Edit Profile</h2>
            <form onSubmit={handleSave}>
              <div className="cp-form-group">
                <label className="cp-form-label">Full Name</label>
                <input
                  className="cp-form-input"
                  type="text"
                  value={formData.fullname}
                  onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                  required
                />
              </div>
              <div className="cp-form-group">
                <label className="cp-form-label">Company Name</label>
                <input
                  className="cp-form-input"
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
              </div>
              <div className="cp-form-group">
                <label className="cp-form-label">Company Location</label>
                <input
                  className="cp-form-input"
                  type="text"
                  value={formData.companyLocation}
                  onChange={(e) => setFormData({ ...formData, companyLocation: e.target.value })}
                />
              </div>
              {saveMsg && (
                <p className={`cp-save-msg ${saveMsg.includes("success") ? "success" : "error"}`}>
                  {saveMsg}
                </p>
              )}
              <div className="cp-modal-actions">
                <button type="submit" className="cp-save-btn" disabled={saving}>
                  {saving ? "Saving..." : "Save Changes"}
                </button>
                <button type="button" className="cp-cancel-btn" onClick={() => setShowEdit(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyProfile;
