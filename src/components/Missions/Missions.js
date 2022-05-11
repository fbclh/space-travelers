import { useSelector } from 'react-redux';
import MissionList from './MissionList';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);

  return (
    <div className="container">
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="fs-5">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionList
              key={mission.id}
              missionName={mission.mission_name}
              missionDescription={mission.description}
              reserved={mission.reserved}
              id={mission.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
