// /client/src/GasLogPage.js
import React, { useState } from "react";

function GasLogPage() {
  const [miles, setMiles] = useState("");
  const [gallons, setGallons] = useState("");
  const [mpg, setMpg] = useState(null);
  const [oilChangeDate, setOilChangeDate] = useState(null);

  const handleSubmit = () => {
    const calculatedMpg = miles / gallons;
    setMpg(calculatedMpg);

    // Assuming oil change happens every 3000 miles
    const milesUntilOilChange = 3000 - miles;
    const daysUntilOilChange = milesUntilOilChange / 30;
    setOilChangeDate(daysUntilOilChange);
  };

  return (
    <div>
      <h1>Log Gas</h1>
      <input
        type="number"
        value={miles}
        onChange={(e) => setMiles(e.target.value)}
        placeholder="Current Miles"
      />
      <input
        type="number"
        value={gallons}
        onChange={(e) => setGallons(e.target.value)}
        placeholder="Gallons"
      />
      <button onClick={handleSubmit}>Submit</button>

      {mpg && (
        <div>
          <h3>Miles Per Gallon: {mpg}</h3>
          <h3>Time until next oil change: {oilChangeDate} days</h3>
        </div>
      )}
    </div>
  );
}

export default GasLogPage;
