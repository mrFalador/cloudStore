import React, {useState} from 'react';
import Input from '../../utils/input/input'
import './registration.css';
import {registration} from "../../action/user";

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='registration'>
            <div className="registration__header">Регистрация</div>
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
                onClick={() => registration(email, password)}
            >
                Зарегистрироваться
            </button>
        </div>
    );
};

export default Registration;