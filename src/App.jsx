import { useState } from 'react';
import LoginForm from './components/LoginForm.jsx';
import JobPostForm from './components/JobPostForm.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate login success
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <JobPostForm />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
