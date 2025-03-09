import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { MdMenu, MdSearch, MdDashboard, MdNightlight } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ setIsMenuOpen, setSearchQuery }) {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
    };

    return (
        <div className="p-3 d-flex justify-content-between align-items-center header-container">
            {/* Left Section */}
            <div className="d-flex align-items-center">
                <MdMenu 
                    size={28} 
                    className="me-2 cursor-pointer" // Show only on mobile
                    title="Menu"
                    onClick={() => setIsMenuOpen(true)} 
                />
                <Link to="/">
                    <img src={Logo} alt="Logo" className="logo" />
                </Link>
            </div>

            {/* Search Input */}
            <div className={`search-bar d-flex align-items-center mx-3 ${isMobileSearchOpen ? "d-flex" : "d-none d-md-flex"}`}>
                <MdSearch size={24} className="me-2 text-secondary" />
                <input
                    type="text"
                    className="form-control w-100"
                    placeholder="Search tasks..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Right Section */}
            <div className="d-flex align-items-center">
                <MdSearch 
                    size={28} 
                    className="cursor-pointer d-md-none me-3" 
                    title="Search" 
                    onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)} 
                />
                <MdDashboard size={28} className="me-3 cursor-pointer" title="Dashboard" />
                {isDarkMode ? (
                    <FaSun 
                        size={28} 
                        className="cursor-pointer" 
                        title="Switch to Light Mode"
                        onClick={toggleTheme} 
                    />
                ) : (
                    <MdNightlight 
                        size={28} 
                        className="cursor-pointer" 
                        title="Switch to Dark Mode"
                        onClick={toggleTheme} 
                    />
                )}
            </div>
        </div>
    );
}
