import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import Logout from './Logout';
import hamburger from '../sass/assets/hamburger.png';
import cross from '../sass/assets/cross.png';

export default function Navbar() {
  const [user] = useAtom(userAtom);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setBgPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='nav'>
      <div className='nav-background' style={{ backgroundPosition: `${bgPosition.x}% ${bgPosition.y}%` }}></div>
      <div className='nav-container'>
        <a href="#" className='nav-brand'>Immo Agency</a>
        <ul className='nav-list'>
          <li className={`nav-item ${showMenu ? 'show' : ''}`}>
            <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Accueil</Link>
          </li>
          {user.isLogged ? (
            <>
              <li className={`nav-item ${showMenu ? 'show' : ''}`}>
              <Link to="/new_property" className={location.pathname === '/new_property' ? 'active-link' : ''}>Ajouter location</Link>
              </li>
              <li className={`nav-item ${showMenu ? 'show' : ''}`}>
                <Logout />
              </li>
            </>
          ) : (
            <>
              <li className={`nav-item ${showMenu ? 'show' : ''}`}>
                <Link to="/login" className={location.pathname === '/login' ? 'active-link' : ''}>Connexion/S'inscrire</Link>
              </li>
            </>
          )}
        </ul>
        <button onClick={toggleMenu} className='btn-nav'>
          <img src={showMenu ? cross : hamburger} className='icon' alt="icon" />
        </button>
      </div>
    </nav>
  );
}
