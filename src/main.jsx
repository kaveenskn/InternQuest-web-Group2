import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import JobPostForm from './components/JobPostForm.jsx';
import Dashboard from './components/cvCreation.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Dashboard/>
  </StrictMode>
);
