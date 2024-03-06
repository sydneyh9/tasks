/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const HOLIDAYS: string[] = ["🎄", "🥚🐇", "🎃", "🦃", "💖"];
    const [holiday, setHoliday] = useState<string>(HOLIDAYS[4]);
    function changeHolidayByAlphabet(): void {
        setHoliday(
            holiday === HOLIDAYS[4]
                ? HOLIDAYS[0]
                : holiday === HOLIDAYS[0]
                ? HOLIDAYS[1]
                : holiday === HOLIDAYS[1]
                ? HOLIDAYS[2]
                : holiday === HOLIDAYS[2]
                ? HOLIDAYS[3]
                : HOLIDAYS[4]
        );
    }
    function changeHolidayByYear(): void {
        setHoliday(
            holiday === HOLIDAYS[4]
                ? HOLIDAYS[1]
                : holiday === HOLIDAYS[1]
                ? HOLIDAYS[2]
                : holiday === HOLIDAYS[2]
                ? HOLIDAYS[3]
                : holiday === HOLIDAYS[3]
                ? HOLIDAYS[0]
                : HOLIDAYS[4]
        );
    }
    return (
        <div>
            Holiday: {holiday}
            <Button onClick={changeHolidayByYear}>Advance by Year</Button>
            <Button onClick={changeHolidayByAlphabet}>
                Advance by Alphabet
            </Button>
        </div>
    );
    //return <div>Cycle Holiday</div>;
}
