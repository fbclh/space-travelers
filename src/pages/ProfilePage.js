// import MissionFilter from '../components/Profile/MissionFilter';
import ReservedMissionsList from '../components/Missions/ReservedMissionList';
import RocketsFilter from '../components/Profile/RocketsFilter';

export default function ProfilePage() {
  return (
    <div className="filter-container">
      {/* <MissionFilter /> */}
      <section>
        <h2>Reserved Missions</h2>
        <ReservedMissionsList />
      </section>
      <RocketsFilter />
    </div>
  );
}
