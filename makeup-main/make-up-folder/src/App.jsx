import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx';
import ContactUs from './components/ContactUs.jsx';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FullService from './components/FullService.jsx'
import Courses from './components/Courses.jsx'


function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                        <Route path="/services/full-service" element={<FullService />} />
                        <Route path="/services/courses" element={<Courses />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App
