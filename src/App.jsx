import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Workers from './pages/Workers'
import WorkerDetail from './pages/WorkerDetail'
import Employers from './pages/Employers'
import EmployerProfile from './pages/EmployerProfile'
import SeasonalJobs from './pages/SeasonalJobs'
import Jobs from './pages/Jobs'
import Mardikor from './pages/Mardikor'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Help from './pages/Help'
import Login from './pages/Login'
import Register from './pages/Register'
// Ishchi dashboard sahifalari
import WorkerDashboard from './pages/worker/Dashboard'
import WorkerProfile from './pages/worker/Profile'
import WorkerApplications from './pages/worker/Applications'
import WorkerSaved from './pages/worker/Saved'
import WorkerMessages from './pages/worker/Messages'
import WorkerNotifications from './pages/worker/Notifications'
import WorkerSettings from './pages/worker/Settings'
// Ish beruvchi dashboard sahifalari
import EmployerDashboard from './pages/employer/Dashboard'
import EmployerCompany from './pages/employer/Company'
import EmployerJobs from './pages/employer/Jobs'
import EmployerJobNew from './pages/employer/JobNew'
import EmployerJobDetail from './pages/employer/JobDetail'
import EmployerCandidates from './pages/employer/Candidates'
import EmployerMessages from './pages/employer/Messages'
import EmployerTeam from './pages/employer/Team'
import EmployerBilling from './pages/employer/Billing'
import EmployerAnalytics from './pages/employer/Analytics'
import './App.css'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main className="main-content">
          <Routes>
            {/* Umumiy sahifalar */}
            <Route path="/" element={<Home />} />
            <Route path="/workers" element={<Workers />} />
            <Route path="/worker/:slug" element={<WorkerDetail />} />
            <Route path="/employers" element={<Employers />} />
            <Route path="/employer/:slug" element={<EmployerProfile />} />
            <Route path="/seasonal-jobs" element={<SeasonalJobs />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/mardikor" element={<Mardikor />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/help" element={<Help />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/e/register" element={<Register />} />
            
            {/* Ishchi Dashboard */}
            <Route path="/w/dashboard" element={<WorkerDashboard />} />
            <Route path="/w/profile" element={<WorkerProfile />} />
            <Route path="/w/applications" element={<WorkerApplications />} />
            <Route path="/w/saved" element={<WorkerSaved />} />
            <Route path="/w/messages" element={<WorkerMessages />} />
            <Route path="/w/notifications" element={<WorkerNotifications />} />
            <Route path="/w/settings" element={<WorkerSettings />} />
            
            {/* Ish beruvchi Dashboard */}
            <Route path="/e/dashboard" element={<EmployerDashboard />} />
            <Route path="/e/company" element={<EmployerCompany />} />
            <Route path="/e/jobs" element={<EmployerJobs />} />
            <Route path="/e/jobs/new" element={<EmployerJobNew />} />
            <Route path="/e/jobs/:id" element={<EmployerJobDetail />} />
            <Route path="/e/candidates" element={<EmployerCandidates />} />
            <Route path="/e/messages" element={<EmployerMessages />} />
            <Route path="/e/team" element={<EmployerTeam />} />
            <Route path="/e/billing" element={<EmployerBilling />} />
            <Route path="/e/analytics" element={<EmployerAnalytics />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
