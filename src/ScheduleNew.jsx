export function ScheduleNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateSchedule(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Schedule</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Plant ID: <input name="plant_id" type="text" />
        </div>
        <div>
          Image: <input name="image_url" type="text" />
        </div>
        <div>
          Watering Date: <input name="watering_start_date" type="text" />
        </div>
        <button type="submit">Create Schedule</button>
      </form>
    </div>
  );
}
