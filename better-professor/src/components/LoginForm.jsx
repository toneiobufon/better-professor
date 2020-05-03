import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";


const Main = styled.div`
height: 89vh;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
`
const Form2 = styled.form`
border: 1px solid black;
background-color: #fff;
padding: 20px;
`
const Title = styled.h3`
text-align: center;
margin: 10%;
`
const Text = styled.div`
display: flex;
flex-direction: column;
padding: 60px;
`
const Input = styled.input`
width: 100%;
margin-top: 5%;
margin-bottom: 5%;
`

const Buttonc = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Button = styled.button`
background-color: #4169E1;
color: #fff;
width: 100%;
text-align: center;
padding: 5%;
margin-top: 30%;
`


const LoginForm = (props) => {

  const [login, setLogin] = useState({
    username: '',
    password: '',
    isLoggedIn: false
  })

  const handleChange = event => {
    setLogin({ ...login, [event.target.name]: event.target.value })
  }


  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('https://better-professor-back-end.herokuapp.com/users/login', login)
      .then(response => {
        console.log('response from post', response.data);
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('id', response.data.id)
        setLogin({ ...login, isLoggedIn: true })
        props.history.push('/');
      })

  }

  return (
    <Main>
      <Form2>
        <Title>Login</Title>
        <Text onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={login.username}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={handleChange}
          />
          <Buttonc>
            <Button onClick={handleSubmit}>Login</Button>
          </Buttonc>
        </Text>
      </Form2>
    </Main>
  );
};

export default LoginForm;

