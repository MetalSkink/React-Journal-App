import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        path="/auth/login"
                        component={LoginScreen}/>
                    <Route
                        path="/auth/register"
                        component={RegisterScreen}/>                
                    <Redirect to="/auth/login"></Redirect>
                </Switch>
            </div>
            <div className="helper">
                <h2>Ayuda:</h2>
                <p>
                    <strong>
                    Puedes crearte una cuenta, logearte con la cuenta de prueba o tambien logearte con tu cuenta de google
                    <br/>
                    </strong>
                    Correo: nando@gmail.com<br/>
                    Password: contramuysegura333 
                </p>
            </div>
        </div>
    )
}
