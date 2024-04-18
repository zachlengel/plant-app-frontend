export function SchedulesIndex(props) {
  return (
    <div>
      <h1>Your schedules</h1>
      {props.schedules.map((schedule) => (
        <div key={schedule.id}>
          <h2>{schedule.plant.name}</h2>
          <img src={schedule.plant.image_url} width={250} alt={schedule.plant.name} />
          <p>
            Your {schedule.plant.name} needs {schedule.plant.amount_of_sun} hours of sun a day and watered{" "}
            {schedule.plant.days_to_water} days a week.
          </p>
          <p>It will be time to water on {schedule.watering_start_date}</p>
        </div>
      ))}
    </div>
  );
}
