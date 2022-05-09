import { useSelector } from 'react-redux';
// import './Rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);

  return (
    <section className="rockets">
      {rockets.map((item) => (
        <div key={item.id}>
          <img src={item.flickr_images} alt="rocket" />
          <div>
            <h2>{item.rocket_name}</h2>
            <p>{rockets[0].description}</p>
            <button type="button">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Rockets;
