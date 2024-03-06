import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function startQuiz(): void {
        setAttempts(attempts - 1);
        setProgress(true);
    }
    return (
        <div>
            {" "}
            <div>
                {" "}
                Attempts: {attempts}
                <Button
                    onClick={startQuiz}
                    disabled={inProgress || attempts === 0}
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={() => setProgress(false)}
                    disabled={!inProgress}
                >
                    Stop Quiz
                </Button>
                <span>
                    {" "}
                    <Button
                        onClick={() => setAttempts(attempts + 1)}
                        disabled={inProgress}
                    >
                        Mulligan
                    </Button>{" "}
                    {/*to {attempts}.{" "}*/}
                </span>
                ;<div></div>
            </div>
        </div>
    );
    //return <div>Start Attempt</div>;
}
