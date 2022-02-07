import collegePicture from '../assets/princeton.jpeg';
import Header from './Header';

const LandingPage = () => {
  return (
    <>
      <div className="hero-container">
        <img alt="college campus backdrop" src={collegePicture} />
      </div>
    </>
  );
};

export default LandingPage;
