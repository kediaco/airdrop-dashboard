import './searchBar.css';

import magnifyingglass from '../../images/magnifyingglass.svg';

export default function SearchBar(props: any) {
  const {placeholderText} = props;

  return (
    <div className="base">
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
