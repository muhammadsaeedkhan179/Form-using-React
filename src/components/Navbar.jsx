import React from 'react'
import logo from '../assets/logo.png'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <>
   <>
  <nav className={styles.navbarWrapper}>
    <div className="container">
      <div className={styles.navbar}>
        <div className={styles.logo}>
            <img src={logo} alt="Logo" />
        </div>
        <ul className={styles.navbarUl}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</>
    </>
  )
}

export default Navbar