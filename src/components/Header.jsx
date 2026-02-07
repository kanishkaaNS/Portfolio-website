function Header(){

    return(
        <header className="nav-container">
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#">Home</a></li>
                    <li className="nav-item"><a href="#about">About Me</a></li>
                    <li className="nav-item"><a href="#projects">Projects</a></li>
                    <li className="nav-item"><a href="#">Resume</a></li>
                    <li className="nav-item"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;