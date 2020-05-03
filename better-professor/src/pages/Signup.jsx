import React from "react";
import SignupForm from "../components/SignupForm";
import styled from "styled-components";



const Signup = (props) => {
    return (
        <div >
           <SignupForm
           history={props.history}
           />
        </div>
    )
}

export default Signup;