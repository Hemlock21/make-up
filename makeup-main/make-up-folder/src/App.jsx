import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx';
import ContactUs from './components/ContactUs.jsx';


function App() {
    return (
        <Router>
            <Routes>

                <Route path ="/" element ={<Home />} />
                <Route path ="/contact-us" element ={<ContactUs />} />


            </Routes>
        </Router>
    )
}

export default App
