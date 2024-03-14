import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);
    const [attempts, setAttempts] = useState<number>(3);
    function gain(): void {
        setAttempts(requestedAttempts + attempts);
    }
    function DecreaseAttempts(): void {
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <span>
                <Button onClick={DecreaseAttempts} disabled={attempts === 0}>
                    use
                </Button>
            </span>
            <Form.Group controlId="userAttempts">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestedAttempts(parseInt(event.target.value) || 0)
                    }
                />
                <span>
                    <Button onClick={gain}>gain</Button>
                </span>
                {/*
                {requestedAttempts === ""
                    ? setAttempts(3)
                    : setAttempts(attempts)}
                */}
            </Form.Group>
            <div>The number of attempts you have left is {attempts}.</div>
        </div>
    );
}
