import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

export default function MissionList({
  missionName,
  missionDescription,
  reserved,
  id,
}) {
  const dispatch = useDispatch();

  const handleJoinMission = () => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = () => {
    dispatch(leaveMission(id));
  };

  return (
    <tr key={id}>
      <td>{missionName}</td>
      <td>{missionDescription}</td>
      {reserved ? (
        <td>
          <span className="badge bg-success">Active Members</span>
        </td>
      ) : (
        <td>
          <span className="badge bg-secondary">Not a Member</span>
        </td>
      )}
      <td>
        {reserved ? (
          <button
            className="btn btn-outline-danger"
            type="button"
            onClick={handleLeaveMission}
          >
            Leave
          </button>
        ) : (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleJoinMission}
          >
            Join
          </button>
        )}
      </td>
    </tr>
  );
}

MissionList.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionDescription: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
