import React from 'react';
import Header from '../header/header';
import config from '../../configuration';

class Login extends React.Component {

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <div className="login">
                <Header title="Login"/>
                <form action={config.apiServerAddress + "/user/auth"} method="post">
                    <input name="userName" placeholder="Email address" className="font-s" type="text"/>
                    <input name="password" placeholder="Password" className="font-s" type="password"/>

                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;