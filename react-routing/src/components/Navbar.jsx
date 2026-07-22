import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between px-10 bg-blue-700 text-white p-4 items-center'>
                {/* logo */}
                <div>CodingLab</div>
                {/* menu */}

                <div className='flex gap-5'>
                    <Link to={"/contact"}>
                        <div>Contact</div>
                    </Link>
                    <Link to={"/about"}>
                        <div>About</div>
                    </Link>
                    <Link to={"/login"}>
                        <div>Login</div>
                    </Link>
                    <Link to={"/signup"}>
                        <div>Signup</div>
                    </Link>
                </div>
                {/* search icon */}
                <div><FaSearch /></div>
            </nav>
        </>
    )
}

export default Navbar