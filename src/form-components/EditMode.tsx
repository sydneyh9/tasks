import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    //state for name
    const [name, setName] = useState<string>("Your Name");
    //state for whether or not the program is in edit mode
    const [inEditMode, setEditMode] = useState<boolean>(false);
    //state for whether or not the person is a student
    const [isStudent, setIsStudent] = useState<boolean>(true);
    //checkbox to see if the student is a student
    function checkBoxStudent(): JSX.Element {
        function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
            setIsStudent(event.target.checked);
        }
        return (
            <Form.Check
                type="checkbox"
                id="is-student-check"
                label="Are you a student?"
                checked={isStudent}
                onChange={updateStudent}
            />
        );
    }
    //function to update student's name
    function studentName(): JSX.Element {
        function updateName(event: React.ChangeEvent<HTMLInputElement>) {
            setName(event.target.value);
        }
        return (
            <Form.Group controlId="studentName">
                <Form.Label>Name:</Form.Label>
                <Form.Control value={name} onChange={updateName} />
            </Form.Group>
        );
    }
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-check"
                    label="Edit Name?"
                    checked={inEditMode}
                    onChange={updateEditMode}
                />
                {inEditMode === true ? studentName() : name}
                {inEditMode === true ? checkBoxStudent() : true}
            </div>
            <span>
                {name} is {isStudent ? "a student" : "not a student"}.
            </span>
        </div>
    );
}
