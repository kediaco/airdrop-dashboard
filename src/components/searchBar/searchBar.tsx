import './searchBar.css';

import magnifyingglass from '../../images/magnifyingglass.svg';

export default function SearchBar(props: any) {
  const {placeholderText, isLarge} = props;

  return (
    <div className={`base ${isLarge && 'base-large'}`}>
      <img
        className="magnifying-glass"
        src={magnifyingglass}
        alt="Magnifying Glass"
      />
      <input
        className="search-bar"
        type="text"
        name="address"
        placeholder={placeholderText}
      />
    </div>
  );
}
