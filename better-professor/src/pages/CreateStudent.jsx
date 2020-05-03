import React from "react";
import CreateStudentForm from "../components/CreateStudentForm";



export const CreateStudent = (props) => {
    return (
        <div>
            <CreateStudentForm {...props} />
        </div>
    )
}

export default CreateStudent