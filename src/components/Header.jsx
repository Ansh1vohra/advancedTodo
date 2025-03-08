import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { MdMenu, MdSearch, MdDashboard, MdAccessTime } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header() {
    // Load theme from localStorage when component mounts
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    // Apply dark mode class when the theme changes
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    // Toggle Theme
    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
    };

    return (
        <div className="p-3 d-flex justify-content-between align-items-center">
            <div>
                <MdMenu size={28} className="me-2" />
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>
            <div>
                <MdSearch size={28} className="me-2" />
                <MdDashboard size={28} className="me-2" />
                {isDarkMode ? (
                    <FaSun size={28} className="cursor-pointer text-warning" onClick={toggleTheme} />
                ) : (
                    <MdAccessTime size={28} className="cursor-pointer" onClick={toggleTheme} />
                )}
            </div>
        </div>
    );
}
