export default function UserCard({children}) {
  return (
    <div className="user-card-container">
      <div className="user-card">
        <img src="/image-jeremy.png" alt="The image of the user" className="user-card-image"/>
        <div className="user-card-info">
          <p>Report for</p>
          <p className="username">Jeremy Robson</p>
        </div>

      </div>
      <div className="user-card-controls">
        {children}
      </div>

    </div>
  )
}