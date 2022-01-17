import React from 'react';
import {NavLink} from "react-router-dom";
import './navbar.css'
import logo from '../../assets/img/navbar-logo.svg'
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (
        <div className="navbar">
            <div className="container">
                <img src={logo} alt="" className="navbar_logo"/>
                <div className="navbar__header">MERN_CLOUD</div>
                {!isAuth && <div className="navbar__login"><NavLink to="/login">Войти</NavLink></div>}
                {!isAuth && <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div>}
                {isAuth && <div className="navbar__login" onClick={() => dispatch(logout())}>Выйти</div>}
            </div>
        </div>
    );
};

export default Navbar;