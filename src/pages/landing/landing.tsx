import './landing.css';
import '../../index.css';
import SearchBar from 'src/components/searchBar/searchBar';
import arrowright from '../../images/arrowright.svg';

export default function LandingPage() {
  return (
    <div className="page-base">
      <div className="page-body">
        <h3 className="la--title">
          <span className="la--title-evmos">Evmos </span>Airdrops
        </h3>
        <div className="la--search">
          <SearchBar placeholderText="Enter your Evmos hex or bec32 address" />
          <button className="la--button" type="submit">
            <img src={arrowright} alt="Arrow Right" />
          </button>
        </div>
      </div>
    </div>
  );
}
