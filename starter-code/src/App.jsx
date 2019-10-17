import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from '../components/Navbar/Navbar';
import FormField from '../components/FormField/FormField';
import CoolButton from '../components/CoolButton/CoolButton';
// import { browserRouter, Switch, Router } from 'react-router-dom';
// import User from '../components/Signup/Signup';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="password" type="password" placeholder="e.g. 123456" />
                <CoolButton b1="Login" b2="Signup" />
            </div>
        )
    }
};

export default App;