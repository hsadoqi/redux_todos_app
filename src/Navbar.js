import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
    return (
        <nav>
            <Link to="/lists">All Lists</Link>
            <Link to="/lists/new">New List</Link>
            <a href="/lists">Refresh</a>
        </nav>
    )
}