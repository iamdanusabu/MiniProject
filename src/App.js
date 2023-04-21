import React, { useState } from 'react';
import Modal from 'react-modal';
import logoImg from './logo.jpg';
import bgImg from './bg.png';
import './index.css';
import LoginDialog from './components/Logindialog';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [open, setopen] = useState(false)

  const openModal = () => {
    setopen(true)
  };

  const closeModal = () => {
    setopen(false);
  };

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>health</title>
        <link href="style.css" rel="stylesheet" type="text/css" />
      </head>
      <body style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
        <section id="main">
          <nav>
            <a href="#" className="logo">
              <img src={logoImg} alt="Logo1" />
            </a>
            <ul className="menu">
              <li><a href="index.html">Home</a></li>
              <li><a href="#">categories</a>
                <ul className="sub-menu">
                  <li><a href="#">Doctors</a></li>
                  <li><a href="#">Patients</a></li>
                  <li><a href="#"> Admins</a></li>
                </ul>
              </li>  
              <li><a href="#">Updates</a><ul className="sub-menu">
                  <li><a href="#">Category 1</a></li>
                  <li><a href="#">Category 2</a></li>
                  <li><a href="#">Category 3</a></li>
                </ul></li>
              <li><a href="#">Forums</a><ul className="sub-menu">
                  <li><a href="#">Category 1</a></li>
                  <li><a href="#">Category 2</a></li>
                  <li><a href="#">Category 3</a></li>
                </ul></li>
              <li><a href="#">Contact</a><ul className="sub-menu">
                  <li><a href="#">Category 1</a></li>
                  <li><a href="#">Category 2</a></li>
                  <li><a href="#">Category 3</a></li>
                </ul></li>
            </ul>         
          </nav>
        </section>

        <section className="Content">
          <div className="image">
            <img src={bgImg} alt="logo" />
          </div>
          <div className="main-text">
            <h1>
              Welcome to
              <br />
              <span>Unified Health Portal</span>
            </h1>
            <p>Access your prescription records here</p>
            <div className='row-btn'>
            <button className="btn">
              Go Ahead
            </button>
            <button onClick={openModal} className="btn">
              Login
            </button>
            </div>
          </div>
        </section>

       <LoginDialog open={open} setopen={setopen}/>
      </body>
    </html>
  );
}

export default App;
