import React, {useState} from 'react';
import Input from '../../utils/input/input'
import './registration.css';
import {useDispatch} from "react-redux";
import {login} from "../../action/user";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    return (
        <div className='registration'>
            <div className="registration__header">Авторизация</div>
            <Input
                value={email}
                setValue={setEmail}
                type='text'
                placeholder='введите E-mail'
            />
            <Input
                value={password}
                setValue={setPassword}
                type='password'
                placeholder='введите пароль'
            />
            <button
                className="registration__btn"
                onClick={()=> dispatch(login(email, password))}
            >
                Войти
            </button>
        </div>
    );
};

export default Login;