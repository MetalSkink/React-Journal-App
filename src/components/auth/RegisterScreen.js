import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterEmailPassword } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const {msgError} = useSelector(state => state.ui)

    const [formValues,handleInputChange ] = useForm({
        name: 'Steve',
        email: 'nando@gmail.com',
        password: 'contramuysegura333',
        password2: 'contramuysegura333'
    });

    const {name, email, password, password2} = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterEmailPassword(email,password,name))
        }
        // console.log(name, email, password, password2);
    }

    const isFormValid = () =>{
        if(name.trim().length === 0){
            dispatch(setError('Name is required'));
            return false;
        } else if ( !validator.isEmail(email) ){
            dispatch(setError('Email is not valid'));
            return false;
        }else if ( password !== password2 ){
            dispatch(setError('Passwords dont match'));
            return false;
        }else if ( password.trim().length < 5 ){
            dispatch(setError('Passwords must be at least 5 characters'));
            return false;
        }
        dispatch(removeError());
        return true;
    }
    
    return (
        <div>
            <h3 className="auth__title">Register Screen</h3>
            { msgError && 
            <div className="auth__alert-error">
                {msgError}
            </div> }

            <form onSubmit={ handleLogin }>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange= { handleInputChange } />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange= { handleInputChange } />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange= { handleInputChange }  />
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={ password2 }
                    onChange= { handleInputChange }/>
                <button type="submit" 
                        className="btn btn-primary btn-block mb-5">
                    Register
                </button>
                <Link to="/auth/login"
                        className="link">¿Ya tienes una cuenta?</Link>
            </form>
        </div>
    )
}
