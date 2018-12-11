import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute } from '../util/route_util.jsx';
import LoginFormContainer from './greeting/session_form/login_form_container';
import SignupFormContainer from './greeting/session_form/signup_form_container';

const App = () => (
    <div>
        <header>
            <h1>Hello!</h1>
            <GreetingContainer />
        </header>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;