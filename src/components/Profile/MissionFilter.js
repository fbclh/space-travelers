// import PropTypes from 'prop-types';

// export default function MissionFilter({ missions }) {
//   return (
//     <div className="reserved-container">
//       <h2>My Missions</h2>
//       {missions.length === 0 && <h3>There are no missions reserved</h3>}
//       {missions.length > 0 && (
//         <ul className="rockets-reserved">
//           {missions.map((mission) => (
//             <li key={mission.id}>{mission.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// MissionFilter.propTypes = {
//   missions: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//     }),
//   ).isRequired,
// };
