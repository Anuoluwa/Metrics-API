import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { returnError } from '../redux/actions/alertActions';

const PrivateRoute = ({ component: Component, auth, ...rest}) => (

    <Route {...rest} render={
        props=> 
        auth.isAuthenticated ? <Component {...props}/> : <Redirect to="/"/>
    }/>
)

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps, { returnError })(PrivateRoute);