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
            {/* <h2>Event {event.id}</h2>
            <p>Category: {event.category}</p>
            <p>Region: {event.region}</p> */}
            <div className='event'>
              <a>
                <div>
                  <img className="event_image" src='square.png' alt='arbitrary image'/>
                </div>
                <div className="event_contents">
                  <p className='event_content'>
                    <p className="event_content_main">{event.name}</p>
                    <p className="event_content_place">{event.place}</p>
                    <p className="event_content_date">{event.date}</p>
                  </p>
                  <button className='event_content_button' onClick={() => handleClick(event.id)}>자세히</button>
                </div>
              </a>
            </div>
            <hr className='hr' />
          </div>
        ))) : (<div>해당하는 문화행사가 없습니다.</div>)}
      </div>
    );
  }
  
  export default EventList;
  