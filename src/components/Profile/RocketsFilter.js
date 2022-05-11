import { useSelector, useDispatch } from 'react-redux';
import { cancelReservation } from '../../redux/rockets/rockets';
import './rocketsfilter.css';

export default function RocketsFilter() {
  const reservedRockets = useSelector((state) => state.rocketsReducer);
  const rockets = reservedRockets.filter((item) => item.reserved === true);
  const dispatch = useDispatch();
  return (
    <div className="reserved-rockets">
      <h1>My Rockets</h1>
      <div className="reserved-list">
        {rockets.map((item) => (
          <ul key={item.id}>
            <li className="reserved">
              {item.rocket_name}
              <button
                type="button"
                onClick={() => dispatch(cancelReservation(item.id))}
              >
                Cancel Reservation
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
