import React, { useEffect } from 'react';
import Register from "./pages/Register"
import Login from "./pages/Login";
import NotFoundPage from './pages/NotFoundPage';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAtom } from 'jotai';
import { userAtom } from './atom';
import Cookies from 'js-cookie';

function App() {
  const [, setUser] = useAtom(userAtom);

  useEffect(() => {
    const token = Cookies.get('token');

    if (token) {
      setUser({
        isLogged: true,
      });
    }
  }, []);

  return (
    <>
      <BrowserRouter >
        <header>
          <Navbar />
        </header>
        <main className='container'>
          <Routes>
            <Route exact path="/" element={ <Home />}/>
            <Route path="/register" element={ <Register />}/>
            <Route path="/login" element={ <Login />}/>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>

)}

export default App
