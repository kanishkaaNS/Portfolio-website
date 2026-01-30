function Header(){

    return(
        <header className="nav-container">

            <a href="#top" className="logo">Kanishkaa N S</a>

            <nav className="nav-bar">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#">About Me</a></li>
                    <li className="nav-item"><a href="#">Projects</a></li>
                    <li className="nav-item"><a href="#">Resume</a></li>
                    <li className="nav-item"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;