export function PlantShow(props) {
  return (
    <div className="show">
      <h1>{props.plant.name}</h1>
      <p>{props.plant.description}</p>
      <p>Sun: {props.plant.amount_of_sun} hours</p>
      <p>Water: {props.plant.days_to_water} days a week</p>
    </div>
  );
}
