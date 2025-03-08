import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { MdMenu, MdSearch, MdDashboard, MdNightlight } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header({setIsMenuOpen}) {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });


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
        <>
            <div className="p-3 d-flex justify-content-between align-items-center">
                {/* Left Section */}
                <div>
                    <MdMenu 
                        size={28} 
                        className="me-2 cursor-pointer" 
                        title="Menu"
                        onClick={() => setIsMenuOpen(true)} // Open Side Menu
                    />
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>
                </div>

                {/* Right Section */}
                <div>
                    <MdSearch size={28} className="me-3 cursor-pointer" title="Search" />
                    <MdDashboard size={28} className="me-3 cursor-pointer" title="Dashboard" />

                    {/* Theme Toggle */}
                    {isDarkMode ? (
                        <FaSun 
                            size={28} 
                            className="cursor-pointer " 
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

        </>
    );
}
