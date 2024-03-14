import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectOption, setOption] = useState<string>(options[0]);
    function updateOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setOption(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userOptions">
                <Form.Label>Which option do you choose? </Form.Label>
                <Form.Select value={selectOption} onChange={updateOption}>
                    <option value={options[0]}> {options[0]} </option>
                    <option value={options[1]}> {options[1]} </option>
                    <option value={options[2]}> {options[2]} </option>
                </Form.Select>
            </Form.Group>
            <span> The user selected {selectOption} </span>
            {selectOption === expectedAnswer ? (
                <span> ✔️ </span>
            ) : (
                <span>❌</span>
            )}
        </div>
    );
}
