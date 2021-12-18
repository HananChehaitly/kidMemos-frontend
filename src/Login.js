import { useState } from "react";
import axios from "axios";
import BASE_API_URL from './BaseUrl';
import { Redirect } from "react-router-dom";

const Login = (props) => {
    return ( 
        <a href={`${BASE_API_URL}/login`}>
            Login with Google
        </a>
    );
}
 
export default Login;