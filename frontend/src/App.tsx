import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './layouts/DashboardLayout';
import Market from './pages/Market';
import Placeholder from './components/Placeholder';
import Dashboard from './pages/Dashboard';
import SkillGapDetector from './pages/SkillGapDetector';
import Roadmap from './pages/Roadmap';
import CareerPath from './pages/CareerPath';
import SkillValidator from './pages/SkillValidator';
import AIInterviewCoach from './pages/AIInterviewCoach';
import Opportunities from './pages/Opportunities';
import ProfilePage from './pages/ProfilePage';

import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected/Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="market" element={<Market />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="validator" element={<SkillGapDetector />} />
          <Route path="career-path" element={<CareerPath />} />
          <Route path="challenge" element={<SkillValidator />} />
          <Route path="interview" element={<AIInterviewCoach />} />
          <Route path="jobs" element={<Opportunities />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
