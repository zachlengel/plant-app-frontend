export function SchedulesIndex(props) {
  return (
    <div>
      <h1>Your schedules</h1>
      {props.schedules.map((schedule) => (
        <div key={schedule.id}>
          <h2>{schedule.plant.name}</h2>
          <img src={schedule.plant.image_url} width={250} alt={schedule.plant.name} />
          <button onClick={() => props.onShowPlant(schedule)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
