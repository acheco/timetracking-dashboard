import UserCard from "./components/UserCard.jsx";
import TimeTrackingCard from "./components/TimeTrackingCard.jsx";
import {useState, useEffect} from "react";
import jsonData from "./data/data.json";

function App() {

  const [data, setData] = useState(null)
  const [active, setActive] = useState("weekly")

  useEffect(() => {
    setData(jsonData)
  }, [])

  if (!data) return <div>Loading...</div>;

  return (
    <main>
      <UserCard>
        {
          Object.keys(data[0].timeframes).map((key) => [
            <span key={key}
                  className={`link ${key === active ? 'active' : ''}`}
                  onClick={() => setActive(key)}
            >
              {key}
            </span>,
          ])
        }
      </UserCard>

      <div className="tracking-cards-container">
        {
          data.map((item) => {
            return (
              <TimeTrackingCard
                title={item.title}
                icon={item.icon}
                color={item.color}
                timeframes={item.timeframes[active]}
                active={active}
                key={item.title}/>
            )
          })
        }
      </div>
    </main>
  )
}

export default App
