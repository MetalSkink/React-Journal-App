import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    // console.log(rest.location.pathname);
    localStorage.setItem('lastPath',rest.location.pathname);

    return (
        <Route {...rest}
                component={(props) =>( 
                    (isAuthenticated)
                        ? (<Component {...props}/>)
                        : (<Redirect to="/auth"/>)
                )}/>            
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
