export function PlantsIndex(props) {
  return (
    <div id="plants-index">
      <h1 className="index-header">All Plants</h1>
      <div className="container">
        {props.plants.map((plant) => (
          <div key={plant.id} className="card">
            <h2>{plant.name}</h2>
            <img src={plant.image_url} alt={plant.name} />
            <br />
            <button className="button-33" onClick={() => props.onShowPlant(plant)}>
              More Info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
