import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const ProtectedRH = ({ component: Component, ...rest }) => {
    let arrayRH= localStorage.getItem('arrayRH')
    let password = localStorage.getItem('password')
    // console.log(emailInput)

    return (
        <Route
            {...rest}
            render={props => {
                if (arrayRH.includes(password )) {
                    return <Component {...props} />;
                }
                else {
                    return <Redirect to={
                        {
                            pathname: '/login-rh',
                            state: {
                                from: props.location
                            }
                        }
                    }
                    />
                }
            }}
        />
    );
};