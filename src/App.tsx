import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import AdminProfile from './components/AdminProfile';
import AdmissionRecord from './components/AdmissionRecord';
import HostelAllocation from './components/HostelAllocation';
import FeeRecords from './components/FeeRecords';
import Results from './components/Results';
import Staff from './components/Staff';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <AdminDashboard />
        <div className="pt-[60px] md:pl-56">
          <Routes>
            <Route path="/" element={<Navigate to="/admin-profile" replace />} />
            <Route path="/admin-profile" element={<AdminProfile />} />
            <Route path="/admission-record" element={<AdmissionRecord />} />
            <Route path="/hostel-allocation" element={<HostelAllocation />} />
            <Route path="/fee-records" element={<FeeRecords />} />
            <Route path="/results" element={<Results />} />
            <Route path="/staff" element={<Staff />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
