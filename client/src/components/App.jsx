import React, {useEffect} from "react";
import Navbar from "./navbar/Navbar";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import './app.css'
import Registration from "./registration/Registration";
import Login from "./registration/Login";
import Disk from "./disk/Disk";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../action/user";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(auth())
    }, [])

    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar/>
                <div className='wrap'>
                    {!isAuth ?
                        <Routes>
                            <Route path="/registration" element={<Registration/>}/>
                            <Route exact path="/login" element={<Login/>}/>
                            <Route path="*" element={<Navigate to="/login"/>}/>
                        </Routes>
                        :
                        <Routes>
                            <Route exact path="/" element={<Disk/>}/>
                            <Route path="*" element={<Navigate to="/"/>}/>
                        </Routes>
                    }
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
