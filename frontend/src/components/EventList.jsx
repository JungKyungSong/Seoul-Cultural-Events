import { useEffect, useState } from 'react';
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
        events.map(([key, event]) => (
          <div key={event.id}>
            <div className='event'>
              <a>
              <div className="image_container">
                <img
                  className="event_image"
                  width= '200px'
                  src={`/image/${event.id}.jpg`}
                  alt="No image"
                />
              </div>
                <div className="event_contents">
                  <p className='event_content'>
                    <p className="event_content_main">{event.name}</p>
                    <p className="event_content_place">{event.place}</p>
                    <p className="event_content_date">{event.date}</p>
                    <p className="event_content_date">현위치로부터의 거리 : {event.distance}km</p>
                  </p>
                  <button className='event_content_button' onClick={() => handleClick(event.id)}>자세히</button>
                </div>
              </a>
            </div>
            <hr className='hr' />
          </div>
        ))) : (<div>잠시만 기다려주세요.</div>)}
      </div>
    );
  }
  
  export default EventList;
