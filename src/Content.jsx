import { PlantsIndex } from "./PlantsIndex";
import { useState, useEffect } from "react";
import axios from "axios";
import { Login } from "./Login";
import { LogoutLink } from "./Logout";
import { Signup } from "./Signup";
import { Modal } from "./Modal";
import { PlantShow } from "./PlantShow";

export function Content() {
  const [plants, setPlants] = useState([]);
  const [isPlantShowVisible, setIsPlantShowVisible] = useState(false);
  const [currentPlant, setCurrentPlant] = useState({});

  // Shows all plants/index action
  const handleIndexPlants = () => {
    console.log("handleIndexPlants");
    axios.get("http://localhost:3000/plants.json").then((response) => {
      console.log(response.data);
      setPlants(response.data);
    });
  };

  // Shows modal for selected plant/show action
  const handleShowPlant = (plant) => {
    console.log("handleShowPlant", plant);
    setIsPlantShowVisible(true);
    setCurrentPlant(plant);
  };

  // Closes Modal
  const handleClose = () => {
    console.log("handleClose");
    setIsPlantShowVisible(false);
  };

  useEffect(handleIndexPlants, []);

  return (
    <main>
      <h1>Welcome to GrowPro!</h1>
      <Signup />
      <Login />
      <LogoutLink />
      <PlantsIndex plants={plants} onShowPlant={handleShowPlant} />
      <Modal show={isPlantShowVisible} onClose={handleClose}>
        <PlantShow plant={currentPlant} />
      </Modal>
    </main>
  );
}
