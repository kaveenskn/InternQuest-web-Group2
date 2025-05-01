import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import JobPostForm from './components/JobPostForm.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobPostForm />
  </StrictMode>
);
