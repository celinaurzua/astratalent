import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const ProtectedRoute = ({ component: Component, ...rest }) => {
    let emailInput= localStorage.getItem('email')
    let array = localStorage.getItem('array')
    console.log(emailInput)

    return (
        <Route
            {...rest}
            render={props => {
                if (array.includes(emailInput )) {
                    return <Component {...props} />;
                }
                else {
                    return <Redirect to={
                        {
                            pathname: '/',
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