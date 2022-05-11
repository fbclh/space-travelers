import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelReservation } from '../../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();

  return (
    <section className="rockets container">
      {rockets.map((item) => (
        <div className="rocket" key={item.id}>
          <img className="rocket-image" src={item.flickr_images} alt="rocket" />
          <div>
            <h2>{item.rocket_name}</h2>
            {item.reserved ? (
              <p>
                <span className="badge bg-success">Reserved </span>
                {rockets[0].description}
              </p>
            ) : (
              <p>{rockets[0].description}</p>
            )}
            {item.reserved ? (
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => dispatch(cancelReservation(item.id))}
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => dispatch(reserveRocket(item.id))}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Rockets;
