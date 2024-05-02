export function SchedulesIndex(props) {
  return (
    <div className="plants-index">
      <h1 className="index-header">Your Plants</h1>
      <div className="container">
        {props.schedules.map((schedule) => (
          <div key={schedule.id}>
            <article className="card">
              <img
                className="card__background"
                src={schedule.plant.image_url}
                alt={schedule.plant.name}
                width="1920"
                height="2193"
              />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">{schedule.plant.name}</h2>
                  <div className="schedule-content"></div>
                </div>
                <button className="button-33" onClick={() => props.onShowSchedule(schedule)}>
                  Check Plant
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
