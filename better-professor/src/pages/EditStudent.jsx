import React from "react";

import EditStudentForm from "../components/EditStudentForm";
import styled from "styled-components";



const EditStudent = (props) => {
    return (
        <div>
            <Edit>Edit a student</Edit>
            <EditStudentForm
            {...props}
            />
        </div>
    )
}

export default EditStudent;


const Edit = styled.h2`
text-align: center;
`
