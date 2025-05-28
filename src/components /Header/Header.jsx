import React from "react";
import styles from './Header.module.scss';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                Logo
            </div>
            <div className={styles.main}>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/authorities">Authorities</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/qr">QR Generator</Link>
                <Link to="/submit">Добавить жалобу</Link>
            </div>
            <div className={styles.rightSide}>
                <h2>Exit</h2>
            </div>
        </div>
    )
}
export default Header;
