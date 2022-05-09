import { useSelector } from 'react-redux';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);

  return (
    <section className="rockets">
      {missions.map((item) => (
        <div className="flex" key={item.id}>
          <div className="rocket-info">
            <h2>{item.mission_name}</h2>
            <p>{missions[0].description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Missions;
