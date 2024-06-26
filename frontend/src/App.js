import React from "react";
import "./App.css";
// import Client from "./components/Client/Client";
import VehiclesComponent from "./components/Vehicles/Vehicles";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container>
      <div className="App">
        <h1>App component</h1>
        <VehiclesComponent />

        {/* <h2>Value of pi = {Math.PI}</h2>
      <h2>Value of tao = {Math.PI * 2}</h2>

      <Client firstname="Eric" lastname="Cartman" company="South Park" />
      <Client firstname="Peter" lastname="Griffin" /> */}
      </div>
    </Container>
  );
}

export default App;
