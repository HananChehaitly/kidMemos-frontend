import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_API_URL from './BaseUrl';

const ProtectedRoute = (props) => {
    const [loggedIn, setLoggedIn] = useState(null);
    const onRender = async () => {
        await axios.get(`${BASE_API_URL}/authenticate/authApi`, { withCredentials: true }).then(
            response => setLoggedIn(response.data.authentication)
        );        
    }

    useEffect(onRender,[]);

    if(loggedIn === null) {
        return (
            <div>
                wait please ...
            </div>
        )
    }
    if(loggedIn === '1'){
        return (<props.component />);  
    }
    if(loggedIn === '0'){
        return (
            <Redirect to={ { state: {from: props.location} }}/> 
        );
    }                
}
 
export default ProtectedRoute;