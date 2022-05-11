import { useSelector } from 'react-redux';
import ReservedMissions from './ReservedMission';

const ReservedMissionsList = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const reserved = missions.filter((missions) => missions.reserved);

  return (
    <>
      {!(reserved.length > 0) && <p>No missions joined</p>}
      <table className="table">
        <tbody>
          {reserved.map((mission) => (
            <ReservedMissions
              key={mission.id}
              missionName={mission.mission_name}
              missionDescription={mission.description}
              reserved={mission.reserved}
              id={mission.id}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ReservedMissionsList;
