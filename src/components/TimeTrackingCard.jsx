export default function TimeTrackingCard({title, icon, active, timeframes, color}) {

  const {current, previous} = timeframes;

  const previousLabel = {
    daily: 'Yesterday',
    weekly: 'Last week',
    monthly: 'Last month',
  }

  return (
    <div className="time-tracking-card-container">
      <div className={`tracking-card-icon ${color}`}>
        <img src={icon} alt="Work icon"/>
      </div>
      <div className="tracking-card-info">
        <div className="tracking-card-info-header">
          <p>{title}</p>
          <img src="/icon-ellipsis.svg" alt="more options icon" className="more-options-icon"/>
        </div>

        <div className="tracking-card-info-body">
          <p>{current}hrs</p>
          <span>{previousLabel[active]} - {previous}hrs</span>
        </div>
      </div>
    </div>
  )
}