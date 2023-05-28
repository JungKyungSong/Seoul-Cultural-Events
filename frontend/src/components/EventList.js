function EventList({ events }) {
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
              <p className="event_content">Name: {event.name}</p>
              <p className="event_content">Date: {event.date}</p>
              <p className="event_content">Place: {event.place}</p>
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
  