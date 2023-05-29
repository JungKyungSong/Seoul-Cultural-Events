import { useNavigate } from 'react-router-dom';

function EventList({ events }) {
    const navigate = useNavigate();
    const handleClick = (id) => {
      navigate(`/Detail/${id}`)
      window.location.reload()
    }

    return (
      <div>
      {events.length > 0 ? (
        events.map(event => (
          <div key={event.id}>
            <div className="event_img" onClick={() => handleClick(event.id)}>
              <img className="event_image" src='square.png' alt='arbitrary image'/>
            </div>
            <div className="event_contents">
              <p className="event_content">Name: {event.name}</p>
              <p className="event_content">Date: {event.date}</p>
              <p className="event_content">Place: {event.place}</p>
            </div>
            <hr />
          </div>
        ))) : (<div>해당하는 문화행사가 없습니다.</div>)}
      </div>
    );
  }
  
  export default EventList;
  