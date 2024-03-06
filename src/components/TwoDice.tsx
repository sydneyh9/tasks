/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [valueLeft, setValueLeft] = useState<number>(4);
    const [valueRight, setValueRight] = useState<number>(1);
    function changeValueLeft(): void {
        setValueLeft(d6());
    }
    function changeValueRight(): void {
        setValueRight(d6());
    }
    return (
        <div>
            {/*Result = {answer}*/}
            <br></br>
            <span data-testid="left-die">{valueLeft}</span>{" "}
            <span data-testid="right-die">{valueRight}</span>{" "}
            <span>
                <Button onClick={changeValueLeft}>Roll Left</Button>
            </span>
            <span>
                <Button onClick={changeValueRight}>Roll Right</Button>
            </span>
            <div>
                Two Dice
                <br></br>
                {valueLeft === 1 && valueRight === 1 ? (
                    <span>Lose</span>
                ) : valueLeft === valueRight ? (
                    <span>Win</span>
                ) : (
                    <span>None</span>
                )}
            </div>
        </div>
    );
}
