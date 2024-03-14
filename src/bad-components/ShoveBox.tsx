import React, { useState } from "react";
import { Button } from "react-bootstrap";

function MoveableBox({ position }: { position: number }): JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px"
            }}
        ></div>
    );
}
function ShoveBoxButton({
    position,
    setPosition
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    return setPosition(4 + position);
}
export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);
    const box = MoveableBox({ position });
    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <Button
                    onClick={() => ShoveBoxButton({ position, setPosition })}
                >
                    Shove the Box
                </Button>
                <div>
                    <span> {box} </span>
                </div>
            </div>
        </div>
    );
}
