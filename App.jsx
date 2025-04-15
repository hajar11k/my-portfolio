import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import CaseStudy from './pages/CaseStudy';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Home /><Projects /></>} />
        <Route path="/case-study" element={<CaseStudy />} />
      </Routes>
    </Router>
  );
}