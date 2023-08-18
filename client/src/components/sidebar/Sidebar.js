import React, { useEffect, useState } from 'react'
import './sidebar.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    const [cats, setCats] = useState([])
    useEffect(()=>{
        const getCats =async()=>{
            const res = await axios.get('/categories')
            setCats(res.data);
        }
        getCats()
    },
    [])
  return (
    <div className='sidebar'>
        <div className='sidebarItems'>
            <span className='sidebarTitle'>ABOUT ME</span>
            <img src='https://username4all.com/wp-content/uploads/Girls-Attitude-DP-73-300x300.webp'></img>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the  type specimen book.</p>
        </div>
        <div className='sidebarItems'>
        <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList'>
            {cats.map((c) => (
                <Link to={`/?cat=${c.name}`} className='link'>
                <li className='sidebarListItems'>{c.name}</li>

                    </Link>
            ))}
                
            </ul>
        </div>
        <div className='sidebarItems'>
            <span className='sidebarTitle'>CATEGORIES</span>
            <div className='sidebarSocial'>
            <i className="sidebarIcons fa-brands fa-square-facebook"></i>
            <i className="sidebarIcons fa-brands fa-square-twitter"></i>
            <i className="sidebarIcons fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcons fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar