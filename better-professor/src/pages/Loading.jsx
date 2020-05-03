import React from "react";

import styled from "styled-components";

const Loading = () => {
    return (
        <Container>
            <h1>Loading...</h1>
        </Container>
    )
}

export default Loading;

const Container = styled.div`
height: 89vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`