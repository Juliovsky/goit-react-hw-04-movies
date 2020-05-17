import  {NavLink} from 'react-router-dom';
import React from "react";

const Nav =()=>(
    <ul>
        <li>
            <NavLink to="/"> Home</NavLink>
        </li>
        <li>
            <NavLink to="/movies">Movies</NavLink>
        </li>
    </ul>
)

export default Nav;