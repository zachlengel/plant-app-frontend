import { PlantsIndex } from "./PlantsIndex";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./Modal";
import { PlantShow } from "./PlantShow";
import { SchedulesIndex } from "./SchedulesIndex";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";

export function Content() {
  const [plants, setPlants] = useState([]);
  const [schedules, setSchedules] = useState([]);
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

  const handleIndexSchedules = () => {
    console.log("handleIndexSchedules");
    axios.get("http://localhost:3000/schedules.json").then((response) => {
      console.log(response.data);
      setSchedules(response.data);
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
  useEffect(handleIndexSchedules, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedules" element={<SchedulesIndex schedules={schedules} />} />
        <Route path="/plants" element={<PlantsIndex plants={plants} onShowPlant={handleShowPlant} />} />
      </Routes>
      <Modal show={isPlantShowVisible} onClose={handleClose}>
        <PlantShow plant={currentPlant} />
      </Modal>
    </main>
  );
}
