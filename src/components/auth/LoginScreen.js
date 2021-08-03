import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { removeError, setError } from '../../actions/ui'
import { useForm } from '../../hooks/useForm'
import validator from 'validator';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const { msgError,loading } = useSelector(state => state.ui);

    const [formValues,handleInputChange ] = useForm({
        email: '',
        password: ''
        // email: 'nando@gmail.com',
        // password: 'contramuysegura333'
    });

    const {email, password} = formValues;

    const handleLogin=(e) =>{
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startLoginEmailPassword(email, password));
        }
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    const isFormValid = () => {
        if(!validator.isEmail(email)){
            dispatch(setError('Email no es valido'));
            return false;
        }else if(password.trim().length < 5){
            dispatch(setError('La contraseña debe ser de almenos 5 caracteres'));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <div className="animate__animated animate__fadeIn animate__fast">
            <h3 className="auth__title">Login Screen</h3>
            { msgError && 
            <div className="auth__alert-error">
                {msgError}
            </div> }
            <form onSubmit={ handleLogin }
                    >
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={ handleInputChange }/>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={ handleInputChange } />
                <button type="submit"
                        className="btn btn-primary btn-block"
                        disabled={ loading }>
                    Login
                </button>
                <div className="auth__social-networks">
                    <p>Iniciar sesion con redes sociales</p>
                    <div
                        className="google-btn"
                        onClick= {handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register"
                        className="link">Crear una cuenta nueva</Link>
                        
            </form>
        </div>
    )
}
