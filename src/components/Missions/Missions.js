import { useSelector } from 'react-redux';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);

  return (
    <section className="rockets">
      {missions.map((item) => (
        <div key={item.id}>
          <div>
            <h2>{item.mission_name}</h2>
            <p>{missions[0].description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Missions;
