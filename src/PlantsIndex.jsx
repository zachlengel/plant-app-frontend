export function PlantsIndex(props) {
  return (
    <div id="plants-index">
      <h1>All Plants</h1>
      {props.plants.map((plant) => (
        <div key={plant.id}>
          <h2>{plant.name}</h2>
          <img src={plant.image_url} width={250} alt={plant.name} />

          <button onClick={() => props.onShowPlant(plant)}>More Info</button>
          <button>Save</button>
        </div>
      ))}
    </div>
  );
}
