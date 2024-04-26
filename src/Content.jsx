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

  // Shows all schedules
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

  // Used in the submit button to add new schedule
  const handleCreateSchedule = (params, successCallback) => {
    console.log("handleCreateSchedule", params);
    axios.post("http://localhost:3000/schedules.json", params).then((response) => {
      setPlants([...plants, response.data]);
      successCallback();
    });
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
        <PlantShow plant={currentPlant} onCreateSchedule={handleCreateSchedule} />
      </Modal>
    </main>
  );
}
