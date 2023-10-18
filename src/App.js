import "./App.css";

import ControlledForms from "./Topics/ControlledForms";
import DessertsList from "./Topics/DessertList";
import FeedbackForm from "./Topics/FeedbackForm";
import MapMethod from "./Topics/MapMethod";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <>
      <MapMethod />
      <DessertsList data={desserts} />
      <ControlledForms />
      <FeedbackForm />
    </>
  );
}

export default App;
