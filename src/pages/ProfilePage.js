import MissionFilter from '../components/Profile/MissionFilter';
import RocketsFilter from '../components/Profile/RocketsFilter';

export default function ProfilePage() {
  return (
    <div className="filter-container">
      <MissionFilter />
      <RocketsFilter />
    </div>
  );
}
