import { useNavigate } from 'react-router-dom';

function EventList({ events }) {
    const navigate = useNavigate();
    const handleClick = (id) => {
      navigate(`/Detail/${id}`)
      window.location.reload()
    }

    return (
      <div>
        {events.map(event => (
          <div key={event.id}>
            {/* <h2>Event {event.id}</h2>
            <p>Category: {event.category}</p>
            <p>Region: {event.region}</p> */}
            <div className="event_img">
              <img className="event_image" src='square.png' alt='arbitrary image'/>
            </div>
            <div className="event_contents">
              <p className="event_content">행사명: {event.name}</p>
              <p className="event_content">행사 날짜: {event.date}</p>
              <p className="event_content">행사 장소: {event.place}</p>
              <button  onClick={() => handleClick(event.id)}>자세히</button>
            </div>
            <hr />
            {/* <p>Target: {event.target}</p>
            <p>Fee: {event.fee}</p>
            <p>Homepage: <a href={event.homepage}>{event.homepage}</a></p>
            <p>신청일: {event.신청일}</p>
            <p>Address: {event.address}</p>
            <p>Coordinates (X, Y): {event.X}, {event.Y}</p>
            <p>Area: {event.area}</p> */}
          </div>
        ))}
      </div>
    );
  }
  
  export default EventList;
  