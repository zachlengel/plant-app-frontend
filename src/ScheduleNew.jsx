export function ScheduleNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateSchedule(params, () => event.target.reset());
    window.location.href = "/plants";
  };

  return (
    <div className="new-schedule">
      <h1>New Schedule</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Plant ID: <input name="plant_id" type="text" />
        </div>
        <div>
          Watering Date: <input name="watering_start_date" type="text" />
        </div>
        <button className="button-33" type="submit">
          Create Schedule
        </button>
      </form>
    </div>
  );
}
