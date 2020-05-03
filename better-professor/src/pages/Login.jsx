import React from "react";
import LoginForm from "../components/LoginForm";




const Login = (props) => {
    return (
        <div>
            <LoginForm
            history={props.history}
            />
        </div>
    )
}

export default Login;

