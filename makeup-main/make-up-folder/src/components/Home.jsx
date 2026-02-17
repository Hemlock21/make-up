import '../styling/Home.css';
import '../styling/navbar.css';

function Home() {
    return (
        <div className="Home">
            {/* Navbar */}

            {/* Main Section */}
            <main>
                <div className="contact">
                    <div className="image-container">
                        <div className="circle-image"></div>
                    </div>
                    <div className="text-container">
                        <h2><strong>GET IN TOUCH</strong></h2>
                        <p className="profession">Professional makeup artist</p>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <button data-text="GET IN TOUCH">GET IN TOUCH</button>
                    </div>
                </div>
            </main>

        </div>
    );
}

export default Home;
