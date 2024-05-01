export function PlantsIndex(props) {
  return (
    <div id="plants-index">
      <h1 className="index-header">All Plants</h1>
      <div className="container">
        {props.plants.map((plant) => (
          <div key={plant.id} className="card">
            <article className="card">
              <img className="card__background" src={plant.image_url} alt={plant.name} width="1920" height="2193" />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">{plant.name}</h2>
                </div>
                <button className="button-33" onClick={() => props.onShowPlant(plant)}>
                  Read more
                </button>
              </div>
            </article>
            ;
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <article className="card">
  <img
    className="card__background"
    src={plant.image_url}
    alt={plant.name}
    width="1920"
    height="2193"
  />
  <div className="card__content | flow">
    <div className="card__content--container | flow">
      <h2 className="card__title">{plant.name}</h2>
      <p className="card__description">
        {plant.description}
      </p>
    </div>
    <button className="card__button" onClick={() => props.onShowPlant(plant)}>Read more</button>
  </div>
</article>; */
}
