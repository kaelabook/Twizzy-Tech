// /client/src/MainMenu.js
import React from "react";
import { useHistory } from "react-router-dom";

function MainMenu() {
  const history = useHistory();

  return (
    <div>
      <header>
        <div>Oilert</div>
        <button>Settings</button>
        <button>Notifications</button>
      </header>
      <div>
        <button onClick={() => history.push("/create-car")}>
          Create Car
        </button>
        <div>
          <button>Car Model & Year</button>
          <div>
            <button>Got Gas?</button>
            <button>Changed Oil?</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
