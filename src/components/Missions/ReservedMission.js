import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { leaveMission } from '../../redux/missions/missions';

export default function ReservedMission({ missionName, id, wikipedia }) {
  const dispatch = useDispatch();

  const handleLeaveMission = () => {
    dispatch(leaveMission(id));
  };

  const handleWikipedia = () => {
    window.open(wikipedia, '_blank');
  };

  return (
    <tr>
      <td className="td">{missionName}</td>
      <td className="td td-button">
        <button
          className="btn btn-outline-danger"
          type="button"
          onClick={handleLeaveMission}
        >
          Leave Mission
        </button>
      </td>
      <td className="td td-button">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={handleWikipedia}
        >
          Read More
        </button>
      </td>
    </tr>
  );
}

ReservedMission.propTypes = {
  missionName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  wikipedia: PropTypes.string.isRequired,
};
