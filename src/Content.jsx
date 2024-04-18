import { PlantsIndex } from "./PlantsIndex";
import { useState, useEffect } from "react";
import axios from "axios";
import { ScheduleNew } from "./ScheduleNew";
import { Login } from "./Login";
import { LogoutLink } from "./Logout";

export function Content() {
  const [plants, setPlants] = useState([]);

  const handleIndexPlants = () => {
    console.log("handleIndexPlants");
    axios.get("http://localhost:3000/plants.json").then((response) => {
      console.log(response.data);
      setPlants(response.data);
    });
  };

  const handleCreateSchedule = (params, successCallback) => {
    console.log("handleCreateSchedule", params);
    axios.post("http://localhost:3000/schedules.json", params).then((response) => {
      setPlants([...plants, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexPlants, []);

  return (
    <main>
      <h1>Welcome to GrowPro!</h1>
      <Login />
      <LogoutLink />
      <ScheduleNew onCreateSchedule={handleCreateSchedule} />
      <PlantsIndex plants={plants} />
    </main>
  );
}
