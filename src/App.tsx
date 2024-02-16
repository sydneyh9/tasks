import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import img from "./anothermemecat.jpeg";

console.log(img);
function App(): JSX.Element {
    return (
        <div className="App">
            <h1>Hello World</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript, Sydney Holland
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World. How are you doing today?
            </p>
            Ordered List:
            <ul>
                <li>Strawberry</li>
                <li>Blackberry</li>
                <li>Blueberry</li>
            </ul>
            <div style={{ border: "1px solid blue", padding: "4px" }}>
                this will be surrounded by a border and padding.
            </div>
            This is <span style={{ color: "purple" }}>colored text</span>
            <Button onClick={() => console.log("Hello World!")}>
                {" "}
                Log Hello World{" "}
            </Button>
            <Container>
                <Row>
                    <Col>
                        First column.
                        <div
                            style={{
                                border: "2px solid blue",
                                padding: "6px",
                                width: "250px",
                                height: "10px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Second column.{" "}
                        <div
                            style={{
                                border: "2px solid blue",
                                padding: "6px",
                                width: "250px",
                                height: "10px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <img src={img} alt="A picture of another cat meme" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
