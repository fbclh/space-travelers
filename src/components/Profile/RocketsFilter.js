import { useDispatch, useSelector } from 'react-redux';
import { cancelReservation } from '../../redux/rockets/rockets';

export default function RocketsFilter() {
  const reservedRockets = useSelector((state) => state.rocketsReducer);
  const rockets = reservedRockets.filter((item) => item.reserved === true);
  const dispatch = useDispatch();
  return (
    <div className="reserved-rockets">
      <h2>My Rockets</h2>
      <table className="table">
        {!(rockets.length > 0) && <p>No missions joined</p>}
        {rockets.map((item) => (
          <tr key={item.id}>
            <td className="td reserved">
              {item.rocket_name}
              <button
                className="btn btn-outline-danger"
                type="button"
                onClick={() => dispatch(cancelReservation(item.id))}
              >
                Cancel Reservation
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
