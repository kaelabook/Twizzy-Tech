// /client/src/CarCreationPage.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CarCreationPage() {
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const history = useHistory();

  const handleCreateCar = () => {
    // Normally you'd save the car here (e.g., API call)
    alert("Car created!");
    history.push("/main");
  };

  return (
    <div>
      <h1>Create a Car</h1>
      <input
        type="text"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Car Model"
      />
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Car Year"
      />
      <button onClick={handleCreateCar}>Create Car</button>
    </div>
  );
}

export default CarCreationPage;
