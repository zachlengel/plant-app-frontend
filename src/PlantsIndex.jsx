export function PlantsIndex(props) {
  return (
    <div id="plants-index">
      <h1>All Plants</h1>
      {props.plants.map((plant) => (
        <div key={plant.id}>
          <h2>{plant.name}</h2>
          <img src={plant.image_url} width={250} alt={plant.name} />
          <p>{plant.description}</p>
          <p>Sun: {plant.amount_of_sun} hours</p>
          <p>Water: {plant.days_to_water} days a week</p>
        </div>
      ))}
    </div>
  );
}
