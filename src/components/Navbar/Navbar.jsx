import React from 'react';
import './Navbar.css';
import { UserButton } from "@clerk/clerk-react";
import { useClerk } from "@clerk/clerk-react";
// import Quiz from '../Quiz/Quiz';

const Navbar = () => {
    const { user } = useClerk();
    return (
        <div>
            <header>
                <h1>Welcome to Dashboard, {user.firstName}</h1> 
                <h2><UserButton /></h2>
                
            </header>
            
            
        </div>
    )
}

export default Navbar;