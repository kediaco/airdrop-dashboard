import './landing.css';
import SearchBar from 'src/components/searchBar/searchBar';
import arrowright from '../../images/arrowright.svg';

export default function LandingPage() {
  return (
    <div className="landing">
      <div className="content">
        <h3 className="title">
          <span className="title-evmos">Evmos </span>Airdrops
        </h3>
        <div className="search">
          <SearchBar placeholderText="Enter your Evmos hex or bec32 address" />
          <button className="button" type="submit">
            <img src={arrowright} alt="Arrow Right" />
          </button>
        </div>
      </div>
    </div>
  );
}
