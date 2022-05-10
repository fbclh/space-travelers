import { useSelector } from 'react-redux';
import MissionList from './MissionList';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);

  return (
    <div>
      <table className="table-bordered table-striped table-hover">
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
          {/* <div key={item.id}>
              <div>
                <h2>{item.mission_name}</h2>
                <p>{missions[0].description}</p>
              </div>
            </div>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
