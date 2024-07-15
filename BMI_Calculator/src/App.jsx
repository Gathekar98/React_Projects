import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("please enter valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("you are underweight");
      } else if (bmi >= 25 && bmi < 40) {
        setMessage("you are healty weight person");
      } else {
        setMessage("you are overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="text-center">
        <h1>BMI Calculator</h1>
        <main onSubmit={calBmi}>
          <form>
            <div>
              <label htmlFor="Weight">Weight (Kg)</label>
              <input
                type="number"
                value={weight}
                className="form-control"
                id="Weight"
                placeholder="00"
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="Height">Height (in)</label>
              <input
                type="number"
                value={height}
                className="form-control"
                id="Height"
                placeholder="00"
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <button className="w-100 btn mt-2 btn-primary" type="submit">
              Submit
            </button>
            <button
              className="w-100 btn mt-2 btn-light"
              type="submit"
              onClick={reload}
            >
              Reload
            </button>
            <h5 className="report mt-1"> Your BMI is : {bmi}</h5>
            <p>{message}</p>
          </form>
        </main>
      </div>
    </>
  );
}

export default App;
