import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeDrawer = () => {
        setIsOpen(false);
    };

    return (
        <div className="navbar">
            <div className="navbar-logo">
                World of Beauty
            </div>

            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <button
                    className="close-drawer"
                    onClick={closeDrawer}
                >
                    <FaTimes /> Close
                </button>

                <li>
                    <Link to="/" onClick={closeDrawer}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/news" onClick={closeDrawer}>
                        News
                    </Link>
                </li>

                <li>
                    <Link to="/contact" onClick={closeDrawer}>
                        Contact
                    </Link>
                </li>

                <li>
                    <Link to="/about" onClick={closeDrawer}>
                        About
                    </Link>
                </li>
            </ul>

            <button
                className="menu-icon"
                onClick={toggleMenu}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>
    );
};

export default Navbar;
