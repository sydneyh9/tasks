import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function ChangeColor(): JSX.Element {
    const COLORS = [
        "purple",
        "green",
        "black",
        "white",
        "red",
        "pink",
        "blue",
        "orange"
    ];
    const [currentColor, setColor] = useState<string>(COLORS[0]);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((s: string) => (
                <>
                    <Form.Check
                        inline
                        type="radio"
                        style={{ backgroundColor: s }}
                        label={s}
                        value={s}
                        onChange={updateColor}
                        checked={currentColor === s}
                    />
                </>
            ))}

            <div>
                You have chosen
                <div
                    style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: currentColor,
                        display: "inline-block",
                        verticalAlign: "bottom",
                        marginLeft: "5px"
                    }}
                    data-testid="colored-box"
                >
                    {currentColor}
                </div>
            </div>
        </div>
    );
}
