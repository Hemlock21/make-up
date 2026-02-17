import { Link } from 'react-router-dom'
import '../styling/navbar.css';

const Navbar = () => {
    return (
        <header className="flex justify-between items-center pt-[10px] pr-5">
            <div className="flex items-center justify-center w-full max-w-[1200px] mx-auto box-border">
                <nav className="flex justify-between items-center w-full max-w-[1200px] mx-auto px-5 py-[10px]">
                    <div>
                        <span className="nav-text1 logo-text">
                            <strong>PRO</strong> makeup studio
                        </span>
                    </div>
                    <div className="menu bg-[#CABFB8] flex gap-[5px] text-center overflow-hidden items-center justify-center w-[42px] h-[44px] p-0 rounded-full">
                        <Link to="/" className="relative no-underline mx-[15px] font-['Poppins',sans-serif] text-base font-normal text-[#FFF6F3] whitespace-nowrap shrink-0">Home</Link>
                        <a href="#" className="relative no-underline mx-[15px] font-['Poppins',sans-serif] text-base font-normal text-[#FFF6F3] whitespace-nowrap shrink-0">About</a>
                        <a href="#" className="relative no-underline mx-[15px] font-['Poppins',sans-serif] text-base font-normal text-[#FFF6F3] whitespace-nowrap shrink-0">Services</a>
                        <a href="#" className="relative no-underline mx-[15px] font-['Poppins',sans-serif] text-base font-normal text-[#FFF6F3] whitespace-nowrap shrink-0">Portfolio</a>
                        <Link to="/contact-us" className="relative no-underline mx-[15px] font-['Poppins',sans-serif] text-base font-normal text-[#FFF6F3] whitespace-nowrap shrink-0">Contact Us</Link>
                    </div>
                    <div>
                        <span className="nav-text2 logo-text">
                            <strong>ELENA STAGGE</strong>
                        </span>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar