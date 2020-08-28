import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Penta Online Course</h1>
            <nav>
                <a href="/Home">Home</a>
                <a href="/courses">Courses</a>
                <a href="/enroll">Enroll Now</a>
            </nav>
        </div>
    );
};

export default Header;