import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>User Answer: </Form.Label>
                <Form.Control value={userAnswer} onChange={updateAnswer} />
            </Form.Group>
            <div> The user answer is {userAnswer}</div>
            {userAnswer === expectedAnswer ? (
                <span> Does it match the expected answer?: ✔️ </span>
            ) : (
                <span> Does it match the expected answer?: ❌</span>
            )}
        </div>
    );
}
