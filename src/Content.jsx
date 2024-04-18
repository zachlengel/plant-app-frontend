import { PlantsIndex } from "./PlantsIndex";
import { useState, useEffect } from "react";
import axios from "axios";

export function Content() {
  const [plants, setPlants] = useState([]);

  const handleIndexPlants = () => {
    console.log("handleIndexPlants");
    axios.get("http://localhost:3000/plants.json").then((response) => {
      console.log(response.data);
      setPlants(response.data);
    });
  };

  useEffect(handleIndexPlants, []);

  return (
    <main>
      <h1>Welcome to GrowPro!</h1>
      <PlantsIndex plants={plants} />
    </main>
  );
}
