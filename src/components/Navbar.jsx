import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import Logout from './Logout';

export default function Navbar() {
  const [user] = useAtom(userAtom);
  const location = useLocation();

  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setBgPosition({ x, y });
      // console.log(e)
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



  return (
    <nav className='nav'>
      <div className='nav-background'  style={{ backgroundPosition: `${bgPosition.x}% ${bgPosition.y}%` }}></div>
      <div className='nav-container'>
        <a href="#" className='nav-brand'>Immo Agency</a>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Accueil</Link>
          </li>
          {user.isLogged ? (
            <li className='nav-item'>
              <Logout />
            </li>
          ) : (
            <>
              <li className='nav-item'>
                <Link to="/login" className={location.pathname === '/login' ? 'active-link' : ''}>Connexion/S'inscrire</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}